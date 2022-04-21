const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')

// Post / CREATE
router.post('/', userCtrl.create)

module.exports = router