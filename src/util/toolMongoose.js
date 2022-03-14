module.exports = {
	arrayToObject(arrayMongooses) {
		return arrayMongooses.map((arrayMongoose) => arrayMongoose.toObject())
	},
	mongooseToObject(mongoose) {
		return mongoose.toObject()
	},
}
