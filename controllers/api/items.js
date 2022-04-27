const Item = require('../../models/Item')

module.exports = {
    create,
    getAllItems,
    flipStatus,
    deleteItem
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

// Flip Status
async function flipStatus(req, res) {
    const { body } = req

    Item.findByIdAndUpdate(req.params.id, body, {new: true}, (err, updatedItem) => {
        if(!err) {
            res.status(200).json(updatedItem)
        } else {
            res.status(400).json(err)
        }
    })
}

// Delete item
async function deleteItem(req, res) {
    Item.findByIdAndDelete(req.params.id , (err, deletedItem) => {
        if(!err) {
            res.status(200).json(deletedItem)
        } else {
            res.status(400).json(err)
        }
    })
}
