const express = require('express')
const router = express.Router()
const projectsCtrl = require('../../controllers/api/projects')

// POST /api/projects
router.post('/', projectsCtrl.create)

// GET /api/projects
router.get('/', projectsCtrl.getProjects)

// GET /api/projects/:id
router.get('/:id', projectsCtrl.getProject)

// PUT /api/projects/:id
router.put('/:id', projectsCtrl.updateProject)

module.exports = router