// src/data/COC_rules.js

export const rulesCOC = [
  {
    id: "handbook",
    title: "COC7 调查员手册",
    description: "简单的调查员手册，涵盖了你作为调查员加入COC跑团所需要知道的全部信息。",
    pdfUrl: "/assets/pdfs/COC/COC7 调查员手册.pdf",
  },
  {
    id: "full_rules",
    title: "COC7 守秘人规则书",
    description: "完整的COC7版规则，很长，不建议新手阅读。其他守秘人建议参考该书。",
    pdfUrl: "/assets/pdfs/COC/COC7th守秘人规则书2002c.pdf",
  },
  {
    id: "costom_rules",
    title: "秀林生房规",
    description: "一些秀林生系列的跑团游戏的房规。",
    pdfUrl: "/assets/pdfs/COC/房规列表和第二世界.pdf",
  }
];

export const getRuleById = (id) => {
  return rulesCOC.find(rule => rule.id === id);
};