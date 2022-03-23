const Course = require('../modules/Courses')
const { arrayToObject } = require('../../util/toolMongoose')

class CourseController {
	// [GET] /me/stored/courses
	storedCourses(req, res, next) {
		let courseQuery = Course.find({})
		if (req.query.hasOwnProperty('_sort')) {
			courseQuery = courseQuery.sort({
				[req.query.column]: req.query.type,
			})
		}
		Promise.all([courseQuery, Course.countDocumentsDeleted()])
			.then(([courses, deletedCount]) => {
				res.render('me/storedCourses', {
					courses: arrayToObject(courses),
					deletedCount,
				})
			})
			.catch(next)
	}
	// [GET] /me/trash/courses
	trashCourses(req, res, next) {
		Course.findDeleted({})
			.then((courses) =>
				res.render('me/trashCourses', {
					courses: arrayToObject(courses),
				})
			)
			.catch(next)
	}
}

module.exports = new CourseController()
