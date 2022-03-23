const path = require('path')
const express = require('express')
const methodOverride = require('method-override')
const morgan = require('morgan')
const handlebars = require('express-handlebars')

const SortMiddleware = require('./app/middleware/SortMiddleware')

const app = express()
const port = 3000

// Static File
app.use(express.static(path.join(__dirname, '/public')))

// Templates engine
app.engine(
	'hbs',
	handlebars.engine({
		extname: '.hbs',
		helpers: {
			sumOne: (a) => ++a,
			sortable: (field, sort) => {
				const sortType = field === sort.column ? sort.type : 'default'
				const icons = {
					default: 'i',
					desc: 'd',
					asc: 'a',
				}
				const types = {
					default: 'desc',
					desc: 'asc',
					asc: 'desc',
				}
				const icon = icons[sortType]
				const type = types[sortType]
				return `<a href="?_sort&column=${field}&type=${type}">${icon}</a>`
			},
		},
	})
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

// Override method
app.use(methodOverride('_method'))

// Custom middleware
app.use(SortMiddleware)
//
app.use(express.urlencoded({ extended: true })) // form HTML
app.use(express.json())

// HTTP logger
app.use(morgan('combined'))

const routes = require('./routes/index')
// routes
routes(app)

// Connect to DB
const db = require('./config/db')
db.connect()

app.listen(port, () => {
	console.log(`App listening on port ${port}`)
})
