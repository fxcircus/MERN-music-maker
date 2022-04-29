const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    timeVal: Number,
    rootVal: String,
    scaleVal: String,
    tonesVal: String,
    bpmVal: Number,
    soundVal: String,
    itemsVal: Array,
    notesVal: String,
    items: {
        type: Array
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)