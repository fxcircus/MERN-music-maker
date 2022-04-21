const User = require('../../models/User')

const create = async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json({
            name: createdUser.name,
            email: createdUser.email
        })
    } catch(error) {
        res.status(400).json({ message: error.messasge })
    }
}

module.exports = {
    create
}