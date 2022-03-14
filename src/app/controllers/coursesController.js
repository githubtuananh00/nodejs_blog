const Course = require('../modules/Courses')
const { mongooseToObject } = require('../../util/toolMongoose')

class CourseController {
	// [GET] /courses/:slug
	show(req, res, next) {
		Course.findOne({ slug: req.params.slug })
			.then((course) => {
				res.render('courses/show', { course: mongooseToObject(course) })
			})
			.catch(next)
	}
	// [GET] /courses/create
	create(req, res, next) {
		res.render('courses/create')
	}

	// [POST] /courses/store
	store(req, res, next) {
		const course = new Course(req.body)
		course.save()
		res.send('ok')
			.then(() => res.redirect('/'))
			.catch((err) => {})
	}
}

module.exports = new CourseController()
