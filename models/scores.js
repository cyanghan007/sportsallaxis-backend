const mongoose = require('mongoose')

const scoreSchema = new mongoose.Schema({
    description: String,
    score: Number
})

const Scores = mongoose.model('Score', scoreSchema)

module.exports = Scores