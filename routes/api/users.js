const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post('/', userCtrl.create)

// POST /api/user/login
router.post('/login', userCtrl.login)

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, userCtrl.checkToken)

module.exports = router