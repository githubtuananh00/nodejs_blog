const Handlebars = require('handlebars')

module.exports = {
	sumOne: (a) => ++a,
	sortable: (field, sort) => {
		const sortType = field === sort.column ? sort.type : 'default'
		const icons = {
			default: 'i',
			desc: 'd',
			asc: 'a',
		}
		const types = {
			default: 'desc',
			desc: 'asc',
			asc: 'desc',
		}
		const icon = icons[sortType]
		const type = types[sortType]

		const href = Handlebars.escapeExpression(
			`?_sort&column=${field}&type=${type}`
		)

		return `<a href="${href}">${icon}</a>`
	},
}
