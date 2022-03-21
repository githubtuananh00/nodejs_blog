const express = require('express')
const router = express.Router()

const courseController = require('../app/controllers/coursesController')

router.get('/create', courseController.create)
router.post('/store', courseController.store)
router.post('/handle-form-action', courseController.handleFromAction)
router.get('/:slug', courseController.show)
router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)
router.patch('/:id/restore', courseController.restore)
router.delete('/:id', courseController.delete)
router.delete('/:id/force', courseController.forceDelete)

module.exports = router
