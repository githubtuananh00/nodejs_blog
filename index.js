const express = require('express')
const app = express()
const port = 3000

app.get('/abc', (req, res) => {
  var a =1
  var b = 3
  var c = a+ b
  res.send('<h1>Hello World!</h1>')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

