const Item = require('../../models/Item')

module.exports = {
    create,
    getAllItems
}

// Create 
async function create(req, res) {
    try {
        const createdTask = await Item.create(req.body)
        res.status(200).json(createdTask)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Read
async function getAllItems(req, res) {
    try {
        const tasks = await Item.find({})
        res.status(200).json(tasks)
    } catch(e) {
        res.status(400).json(e)
    }
}