// 載入 express, express-handlebars
const express = require('express')
const exphbs = require('express-handlebars')

const app = express()
const port = 3000

// 設定樣板引擎 handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// index 路由設定
app.get('/', (req, res) => {
  res.render('index')
})

// 啟動並監聽本機伺服器
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})