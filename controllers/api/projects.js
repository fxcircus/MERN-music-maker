const Project = require('../../models/Project')

module.exports = {
    create,
    getProject,
    updateProject
}

// Create 
async function create(req, res) {
    try {
        const createdTask = await Project.create(req.body)
        res.status(200).json(createdTask)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Read
async function getProject(req, res) {
    const { id } = req.params
    try {
        const project = await Project.findById(id)
        res.status(200).json(project)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Update
async function updateProject(req, res) {
    const { body } = req

    Project.findByIdAndUpdate({}, body, {new: true}, (err, updatedProject) => {
        if(!err) {
            res.status(200).json(updatedProject)
        } else {
            res.status(400).json(err)
        }
    })
}