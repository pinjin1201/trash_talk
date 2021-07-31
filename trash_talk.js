
const target = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
}

const task = {
  engineer: ['幫我寫個網頁', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['沒有休假', '要能賺錢', '想個 business model', '找 VC 募錢']
}

const phrase = ['很簡單', '沒什麼', '難不倒你', '不算什麼']
  

function generateTrashTalk(options) {
  const phraseNumber = Math.floor(Math.random () * phrase.length)
  let words = ''
  let alertWord = ''
  for (let role in target) {
    if (role === options) {
     return words += `身為一個${target[role]}，${task[role][phraseNumber]}，${phrase[phraseNumber]}吧 !`
    }
  }

  if (!options) {
    return '請選擇一個角色!'
  }
}

module.exports = generateTrashTalk



