const { mongoose } = require('mongoose')

const Schema = mongoose.Schema
const Course = new Schema({
	name: { type: String, default: 'Blog_Name', maxLength: 255 },
	description: { type: String, default: 'Description', maxLength: 600 },
	img: { type: String, default: '' },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Course', Course)
