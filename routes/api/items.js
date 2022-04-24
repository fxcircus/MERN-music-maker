const express = require('express')
const router = express.Router()
const itemsCtrl = require('../../controllers/api/items')

// POST /api/items
router.post('/', itemsCtrl.create)

// GET /api/items
router.get('/', itemsCtrl.getAllItems)

module.exports = router