const express = require('express')
const router = express.Router()

const searchController = require('../app/controlers/SearchController')

router.use('/:slug',searchController.slug)
router.use('/',searchController.index)


module.exports = router