import { Schema } from "../config/database";

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
})