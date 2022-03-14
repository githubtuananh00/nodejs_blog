const Course = require('../modules/Courses')
const { arrayToObject } = require('../../util/toolMongoose')

class SiteController {
	// [GET] /
	home(req, res, next) {
		// res.render('home');
		// Callback
		// Course.find({}, (err, course) => {
		// 	if (!err) {
		// 		res.json(course)
		// 	} else {
		// 		res.status(400).json({ err: 'Error' })
		// 	}
		// })

		// Promise
		Course.find({})
			.then((courses) => {
				courses = arrayToObject(courses)
				res.render('home', { courses })
			})
			.catch(next)
	}
}

module.exports = new SiteController()
