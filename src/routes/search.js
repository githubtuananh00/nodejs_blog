const express = require('express')
const router = express.Router()

const searchController = require('../app/controllers/SearchController')

router.get('/:slug', searchController.slug)
router.get('/', searchController.index)

module.exports = router
