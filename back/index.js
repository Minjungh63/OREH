const express = require('express')
const app = express()

const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'OREH',
  password: 'HERO',
  database: 'OREH_DB',
})

connection.connect()

app.use(express.json()) // 데이터가 json 형식일 때
app.use(express.urlencoded({ extended: true })) // 데이터가 queryString일 때

app.post('/record', (req, res) => {
  console.log(req.body)
  // database INSERT query 작성하기
})
app.listen(3000, () => console.log('3000에서 대기중...'))

connection.end()
