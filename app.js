// 載入 express, express-handlebars, body-parser
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

// 載入 images.json, trash_talk.js
const role = require('./role.json')
const generateTrashTalk = require('./trash_talk.js')

const app = express()
const port = 3000

// 設定樣板引擎 handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

// 設定靜態檔案位置
app.use(express.static('public'))

// 設定 body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// index 路由設定
app.get('/', (req, res) => {
  res.render('index', { role: role.data })
})

app.post('/', (req, res) => {
  // console.log(req.body)
  const options = req.body.role
  
  const start = generateTrashTalk(options)

  res.render('index', { role: role.data, start })
})

// 啟動並監聽本機伺服器
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})