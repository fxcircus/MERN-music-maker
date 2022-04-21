import { toHaveFocus } from "@testing-library/jest-dom/dist/matchers";
import { Schema } from "../config/database";
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 6

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type:String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        minLength: 3,
        required: true
    }
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password
            return ret
        }
    }
})

userSchema.pre('save', async function(next) {
    // The user doc
    if(!this.isModified('password')) return next() // IF the user changed the password
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS) // Update the password with the computed hash
    return next()
})

module.exports = mongoose.model('User', userSchema)