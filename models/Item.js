const mongoose = require('mongoose')
const Schema = mongoose.Schema

const itemSchema = new Schema({
    title: {type: String, required: true},
    isDone: {
        type: Boolean,
        required: false,
        default: false
    },
    parentProjectId: String,
    project: { type: Schema.Types.ObjectId, ref: 'Project' }
}, {
    timestamps: true
})

module.exports = mongoose.model('Item', itemSchema)