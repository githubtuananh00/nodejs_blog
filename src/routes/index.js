const searchRoute = require('./search')
const siteRoute = require('./site')
function routes(app){
    
    app.use('/search',searchRoute)
    app.use('/',siteRoute)
    
}

module.exports = routes;