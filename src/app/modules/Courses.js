const { mongoose } = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema
const CourseSchema = new Schema(
	{
		name: {
			type: String,
			default: 'Blog_Name',
			maxLength: 255,
			required: true,
		},
		description: { type: String, default: 'Description', maxLength: 600 },
		img: { type: String, default: '' },
		videoId: { type: String, required: true },
		slug: { type: String, slug: 'name', unique: true },
	},
	{
		timestamps: true,
	}
)
// Custom Helpers
CourseSchema.query.sortable = function (req) {
	if (req.query.hasOwnProperty('_sort')) {
		const isValidType = ['asc', 'desc'].includes(req.query.type)
		return this.sort({
			[req.query.column]: isValidType ? req.query.type : 'desc',
		})
	}
	return this
}
// Add Plugin
mongoose.plugin(slug)
CourseSchema.plugin(mongooseDelete, { overrideMethods: true, deletedAt: true })

module.exports = mongoose.model('Course', CourseSchema)
