const { mongoose } = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema
const Course = new Schema(
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

module.exports = mongoose.model('Course', Course)
