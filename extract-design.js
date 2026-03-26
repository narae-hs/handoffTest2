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

    const components = [];
    const annotations = [];
    const devReadyNodes = [];

    const walk = (node, path = '') => {
      const currentPath = path ? `${path} > ${node.name}` : node.name;

      if (node.annotations && node.annotations.length > 0) {
        annotations.push({ name: node.name, path: currentPath, annos: node.annotations });
      }

      if (node.type === 'COMPONENT' || node.type === 'COMPONENT_SET') {
        components.push({
          name: node.name,
          type: node.type,
          path: currentPath,
          description: node.description || null,
        });
      }

      if (node.devStatus) {
        devReadyNodes.push({ name: node.name, path: currentPath, status: node.devStatus });
      }

      if (node.children) node.children.forEach(c => walk(c, currentPath));
    };

    walk(res.data.document);

    const componentMeta = res.data.components || {};
    const styleMeta = res.data.styles || {};

    let content = "# 📘 DESIGN INTENT (AUTO-GENERATED)\n\n";

    // 1) Annotations (private beta)
    if (annotations.length > 0) {
      content += "## 📝 Annotations\n\n";
      annotations.forEach(item => {
        content += `### 🧩 ${item.name}\n`;
        item.annos.forEach(a => {
          content += `- **[${a.label || 'Spec'}]**: ${a.properties ? JSON.stringify(a.properties) : (a.notes || '내용 없음')}\n`;
        });
        content += "\n---\n\n";
      });
    } else {
      content += "> ℹ️ Annotations은 Figma REST API에서 아직 private beta라 기본 응답에 포함되지 않을 수 있습니다.\n\n";
    }

    // 2) Components
    if (components.length > 0) {
      content += "## 🧩 Components\n\n";
      content += "| 이름 | 타입 | 설명 |\n";
      content += "|------|------|------|\n";
      components.forEach(c => {
        const desc = c.description || '-';
        content += `| ${c.name} | ${c.type} | ${desc} |\n`;
      });
      content += "\n";
    }

    // 3) Component metadata from file-level
    const compEntries = Object.entries(componentMeta);
    if (compEntries.length > 0) {
      content += "## 📦 Component Metadata\n\n";
      compEntries.forEach(([id, comp]) => {
        content += `- **${comp.name}**`;
        if (comp.description) content += `: ${comp.description}`;
        content += `  _(key: ${comp.key})_\n`;
      });
      content += "\n";
    }

    // 4) Styles
    const styleEntries = Object.entries(styleMeta);
    if (styleEntries.length > 0) {
      content += "## 🎨 Styles\n\n";
      content += "| 이름 | 타입 | 설명 |\n";
      content += "|------|------|------|\n";
      styleEntries.forEach(([id, style]) => {
        content += `| ${style.name} | ${style.styleType} | ${style.description || '-'} |\n`;
      });
      content += "\n";
    }

    // 5) Dev Status
    if (devReadyNodes.length > 0) {
      content += "## ✅ Dev Status\n\n";
      devReadyNodes.forEach(n => {
        const label = n.status.type === 'READY_FOR_DEV' ? '🟢 Ready for Dev' : '✅ Completed';
        content += `- **${n.name}**: ${label}\n`;
      });
      content += "\n";
    }

    if (components.length === 0 && compEntries.length === 0 && styleEntries.length === 0 && devReadyNodes.length === 0 && annotations.length === 0) {
      content += "> ⚠️ 추출할 수 있는 디자인 정보가 없습니다.\n";
    }

    fs.writeFileSync('./DESIGN_ANNOTATIONS.md', content);
    console.log(`✅ DESIGN_ANNOTATIONS.md 생성 완료!`);
    console.log(`   - Components: ${components.length}개`);
    console.log(`   - Styles: ${styleEntries.length}개`);
    console.log(`   - Dev Status: ${devReadyNodes.length}개`);
    console.log(`   - Annotations: ${annotations.length}개`);

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