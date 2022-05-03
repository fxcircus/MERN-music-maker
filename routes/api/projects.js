const express = require('express')
const router = express.Router()
const projectsCtrl = require('../../controllers/api/projects')

// POST /api/projects
router.post('/', projectsCtrl.create)

// GET /api/projects
router.get('/all/:email', projectsCtrl.getProjects)

// GET /api/projects/:id
router.get('/:id', projectsCtrl.getProject)

// GET /api/projects/get-first
router.get('/first/1', projectsCtrl.getFirstProject)

// PUT /api/projects/:id
router.put('/:id', projectsCtrl.updateProject)

// DELETE ALL /api/projects
router.delete('/delete-all', projectsCtrl.deleteAllProjects)

// DELETE ONE /api/projects/:id
router.delete('/:id', projectsCtrl.deleteOneProject)

module.exports = router