const Project = require('../../models/Project')

module.exports = {
    create,
    getProject,
    updateProject,
    getProjects,
    deleteAllProjects,
    deleteOneProject
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

// Read (ALL projects)
async function getProjects(req, res) {
    try {
        const projects = await Project.find({})
        res.status(200).json(projects)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Read (ONE project)
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
    const { id } = req.params
    Project.findByIdAndUpdate(id, body, {new: true}, (err, updatedProject) => {
        if(!err) {
            res.status(200).json(updatedProject)
        } else {
            res.status(400).json(err)
        }
    })
}

// Delete all
async function deleteAllProjects(req, res) {
    try {
        const projects = await Project.deleteMany({})
        res.status(200).json(projects)
    } catch(e) {
        res.status(400).json(e)
    }
}

// Delete one
async function deleteOneProject(req, res) {
    const { id } = req.params
    try {
        const project = await Project.findByIdAndDelete(id)
        res.status(200).json(project)
    } catch(e) {
        res.status(400).json(e)
    }
}