const searchRoute = require('./search')
const siteRoute = require('./site')
const coursesRoute = require('./course')
function routes(app) {
	app.use('/courses', coursesRoute)
	app.use('/search', searchRoute)
	app.use('/', siteRoute)
}

module.exports = routes
