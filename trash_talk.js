
// 準備產生話語所需的資料
// 角色
const target = {
  engineer: '工程師',
  designer: '設計師',
  entrepreneur: '創業家'
}
// 話語一，工作內容
const task = {
  engineer: ['幫我寫個網頁', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['沒有休假', '要能賺錢', '想個 business model', '找 VC 募錢']
}
// 話語二，嘲弄話
const phrase = ['很簡單', '沒什麼', '難不倒你', '不算什麼']
  

// 執行 話語產生器
function generateTrashTalk(options) {
  // 錯誤回應 ( 使用者沒有選擇角色 )
  if (!options) {
    return '請選擇一個角色!'
  }

  // 產生亂數
  const randomNumberForTask = Math.floor(Math.random() * phrase.length)
  const randomNumberForMock = Math.floor(Math.random() * phrase.length)

  // 判斷使用者選擇的角色，給予回應
  return `身為一個${target[options]}，${task[options][randomNumberForTask]}，${phrase[randomNumberForMock]}吧 !`

  /*
  // for in loop ( 當 role 過多時，用字串的方式較 for loop 方式佳 )
  
  // 產生亂數
  const randomNumber = Math.floor(Math.random () * phrase.length)
  // 新增一空字串
  let words = ''

  // 判斷使用者選擇的角色，給予回應
  for (let role in target) {
    if (role === options) {
      return words += `身為一個${target[role]}，${task[role][randomNumber]}，${phrase[randomNumber]}吧 !`
    }
  }
  // 錯誤回應 ( 使用者沒有選擇角色 )
  if (!options) {
    return '請選擇一個角色!'
  }
  */
}

module.exports = generateTrashTalk
