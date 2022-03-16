const searchRoute = require('./search')
const siteRoute = require('./site')
const coursesRoute = require('./course')
const meRoute = require('./me')

function routes(app) {
	app.use('/courses', coursesRoute)
	app.use('/search', searchRoute)
	app.use('/me', meRoute)
	app.use('/', siteRoute)
}

module.exports = routes
