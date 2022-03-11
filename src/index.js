const path = require('path')
const express = require('express')
const morgan = require('morgan')
const  handlebars  = require('express-handlebars')

const app = express()
const port = 3000

// Static File
app.use(express.static(path.join(__dirname, 'public')))



// Templates engine
app.engine('hbs', handlebars.engine({extname: '.hbs'}))

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

// 
app.use(express.urlencoded({extended:true})) // form HTML
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

const routes = require('./routes/index')
// routes
routes(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

