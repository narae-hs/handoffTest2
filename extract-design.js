const axios = require('axios');
const fs = require('fs');

const MY_TOKEN = process.env.FIGMA_TOKEN;
const MY_FILE_KEY = process.env.FIGMA_FILE_KEY;

// 2. 혹시 모를 유령 문자(공백, 줄바꿈)를 한 번 더 완벽히 제거합니다.
const CLEAN_TOKEN = MY_TOKEN.replace(/[\r\n\s]/gm, '');
const CLEAN_FILE_KEY = MY_FILE_KEY.replace(/[\r\n\s]/gm, '');

const api = axios.create({
  baseURL: 'https://api.figma.com/v1',
  headers: { 'X-Figma-Token': CLEAN_TOKEN }
});

async function run() {
  try {
    console.log('📡 피그마에서 데이터를 가져오는 중입니다...');
    const res = await api.get(`/files/${CLEAN_FILE_KEY}`);
    
    const nodesWithAnno = [];
    const findAnnos = (node) => {
      if (node.annotations && node.annotations.length > 0) {
        nodesWithAnno.push({ name: node.name, annos: node.annotations });
      }
      if (node.children) node.children.forEach(findAnnos);
    };

    findAnnos(res.data.document);

    let content = "# 📘 DESIGN INTENT (AUTO-GENERATED)\n\n";
    if (nodesWithAnno.length === 0) {
      content += "> ⚠️ 피그마 파일에 공식 Annotation(주석)이 하나도 발견되지 않았습니다.\n";
    } else {
      nodesWithAnno.forEach(item => {
        content += `### 🧩 Component: ${item.name}\n`;
        item.annos.forEach(a => {
          content += `- **[${a.label || 'Spec'}]**: ${a.notes || '내용 없음'}\n`;
        });
        content += "\n---\n\n";
      });
    }

    fs.writeFileSync('./DESIGN_ANNOTATIONS.md', content);
    console.log("✅ DESIGN_ANNOTATIONS.md 생성이 완료되었습니다!");
    
  } catch (error) {
    console.error('❌ 에러 발생:');
    if (error.response) {
      console.error(`상태 코드: ${error.response.status}`);
      console.error(`메시지: ${JSON.stringify(error.response.data)}`);
    } else {
      console.error(error.message);
    }
  }
}

run();