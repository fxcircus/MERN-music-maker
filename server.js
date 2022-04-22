const express = require('express')
const path = require('path')
const logger = require('morgan')

require('dotenv').config()
require('./config/database.js')

const app = express()

// middleware
app.use(logger('dev')) // Morgan
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

// Check if token and create req.user
app.use(require('./config/checkToken'))

// API middleware
app.use('/api/users', require('./routes/api/users'))

// Catch All Route, returns index.html for all non-AJAX requests
app.get('.*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Backend is listening on ${PORT}`)
})