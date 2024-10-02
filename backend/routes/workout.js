const express = require('express')

const router = express.Router()

// Get all workouts
router.get('/', (req, res) => {
    res.json({mssg: 'Get all workouts'})
})

// Get single workout
router.get('/:id', (req, res) => {
    res.json({mssg: 'Get a single workouts'})
})

// Add a new workout
router.post('/', (req, res) => {
    res.json({mssg: 'Add a new workouts'})
})

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({mssg: 'Delete a workouts'})
})

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({mssg: 'Update a workouts'})
})



module.exports = router