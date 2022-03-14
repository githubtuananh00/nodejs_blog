class SearchController {
	// [GET] /search
	index(req, res) {
		res.render('search')
	}
	// [GET] /search/:slug
	slug(req, res) {
		res.send('Success')
	}
}

module.exports = new SearchController()
