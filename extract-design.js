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

    const AI_RULES_PATTERN = /(local[\s_-]*)?ai[\s_-]*rules?/i;

    const components = [];
    const devReadyNodes = [];
    const aiRulesSections = [];

    const collectTexts = (node) => {
      const texts = [];
      if (node.type === 'TEXT' && node.characters) {
        texts.push({ name: node.name, text: node.characters });
      }
      if (node.children) {
        node.children.forEach(c => texts.push(...collectTexts(c)));
      }
      return texts;
    };

    const walk = (node, path = '') => {
      const currentPath = path ? `${path} > ${node.name}` : node.name;

      if (AI_RULES_PATTERN.test(node.name)) {
        const texts = collectTexts(node);
        aiRulesSections.push({ name: node.name, path: currentPath, texts });
        return;
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

    // 1) AI Rules
    if (aiRulesSections.length > 0) {
      content += "## 🤖 AI Rules\n\n";
      aiRulesSections.forEach(section => {
        content += `### 📌 ${section.name}\n`;
        content += `> 경로: ${section.path}\n\n`;
        if (section.texts.length > 0) {
          section.texts.forEach(t => {
            content += `${t.text}\n\n`;
          });
        } else {
          content += "_텍스트 노드가 없습니다._\n\n";
        }
        content += "---\n\n";
      });
    } else {
      content += "> ⚠️ \"AI Rules\" 이름의 섹션/프레임을 찾지 못했습니다.\n";
      content += "> Figma에서 프레임 이름을 \"AI Rules\"로 지정해주세요.\n\n";
    }

    // 2) Components
    if (components.length > 0) {
      content += "## 🧩 Components\n\n";
      content += "| 이름 | 타입 | 설명 |\n";
      content += "|------|------|------|\n";
      components.forEach(c => {
        content += `| ${c.name} | ${c.type} | ${c.description || '-'} |\n`;
      });
      content += "\n";
    }

    // 3) Component metadata
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

    fs.writeFileSync('./DESIGN_ANNOTATIONS.md', content);
    console.log(`✅ DESIGN_ANNOTATIONS.md 생성 완료!`);
    console.log(`   - AI Rules 섹션: ${aiRulesSections.length}개`);
    console.log(`   - Components: ${components.length}개`);
    console.log(`   - Styles: ${styleEntries.length}개`);
    console.log(`   - Dev Status: ${devReadyNodes.length}개`);

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