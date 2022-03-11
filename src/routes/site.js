const express = require('express')
const router = express.Router()

const siteController = require('../app/controlers/SiteController')

router.use('/',siteController.home)

module.exports = router