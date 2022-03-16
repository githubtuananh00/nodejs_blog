const Course = require('../modules/Courses')
const { arrayToObject } = require('../../util/toolMongoose')

class CourseController {
	// [GET] /me/stored/courses
	storedCourses(req, res, next) {
		Course.find({})
			.then((courses) =>
				res.render('me/storedCourses', {
					courses: arrayToObject(courses),
				})
			)
			.catch(next)
	}
}

module.exports = new CourseController()
