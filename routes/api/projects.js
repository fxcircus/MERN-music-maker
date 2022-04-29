const express = require('express')
const router = express.Router()
const projectsCtrl = require('../../controllers/api/projects')

// POST /api/projects
router.post('/', projectsCtrl.create)

// GET /api/projects
router.get('/:id', projectsCtrl.getProject)

// UPDATE /api/projects
router.put('/:id', projectsCtrl.updateProject)

module.exports = router