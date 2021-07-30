// 載入 express, express-handlebars
const express = require('express')
const exphbs = require('express-handlebars')

// 載入 images.json
const images = require('./images.json')

const app = express()
const port = 3000

// 設定樣板引擎 handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 設定靜態檔案位置
app.use(express.static('public'))

// index 路由設定
app.get('/', (req, res) => {
  res.render('index', { images: images.data })
})

// 啟動並監聽本機伺服器
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`)
})