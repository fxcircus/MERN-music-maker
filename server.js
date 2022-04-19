require('dotenv').config()
const express = require('express')
const path = require('path')
const logger = require('morgan')
const PORT = process.env.PORT || 3001

require('./config/database.js')

const app = express()



// middleware
app.use(logger('dev')) // Morgan
app.use(express.json())
app.use(express.static(path.join(__dirname, 'build')))

// API

app.get('.*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Backend is listening on ${PORT}`)
})