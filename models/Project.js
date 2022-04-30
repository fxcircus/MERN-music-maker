const mongoose = require('mongoose')
const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    timeVal: Number,
    rootVal: String,
    scaleVal: String,
    tonesVal: String,
    bpmVal: Number,
    soundVal: Array,
    itemsVal: Array,
    notesVal: String,
}, {
    timestamps: true
})

module.exports = mongoose.model('Project', projectSchema)