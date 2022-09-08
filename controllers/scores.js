const express = require('express')
const router = express.Router()
const Scores = require('../models/scores')

// Remember INDUCES
// Index
router.get('/', (req, res) => {
    Scores.find({}, (err, foundScores) => {
        res.json(foundScores)
    })
})

// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res) => {
    Scores.findByIdAndRemove(req.params.id, (err, deletedScore) => {
        res.json(deletedScore)
    })
})

// Update
router.put('/:id', (req, res) => {
    Scores.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTodo) => {
        res.json(updatedScore)
    })
})

// Create
router.post('/', (req, res) => {
    Scores.create(req.body, (err, createdScore) => {
        res.json(createdScore) //.json() will send proper headers in response so client knows it's json coming back
    })
})

// Edit - Will be handled by React application
// Show
// Show
router.get('/:id', (req, res) => {
    Scores.findById(req.params.id, (err, foundScore) => {
        res.json(foundScore)
    })
})

module.exports = router