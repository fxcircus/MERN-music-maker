const User = require('../../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// We are using function exporessions so everything get hoisted and works even if we define this at the top
module.exports = {
    create,
    login,
    checkToken
}

// Sign up - create new user
 async function create(req, res) {
    try {
        const createdUser = await User.create(req.body)
        const token = createJWT(createdUser)
        res.status(200).json(token)
    } catch(e) {
        res.status(400).json(e)
    }
}

function checkToken(req, res) {
    console.log('req.user', req.user)
    res.status(200).json(req.exp)
}

// Sign in -  create new user
async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!user) throw new Error()
        // Compare the login user's hashed pass with the version on the DB
        const match = await bcrypt.compare(req.body.password, user.password)
        if (!match) throw new Error()
        // Everything works, run createJWT
        res.status(200).json( createJWT(user) )
    } catch {
        res.json(400).json('Bad Credentials')
    }
}

function createJWT (user) {
    return jwt.sign(
        { user },
        process.env.SECRET,
        { expiresIn: '24h'}
    )
}

