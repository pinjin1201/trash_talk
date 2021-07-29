// 載入 express
const express = require('express')

const app = express()
const port = 3000

// index 路由設定
app.get('/', (req, res) => {
  res.render('index')
})

// 啟動並監聽本機伺服器
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})