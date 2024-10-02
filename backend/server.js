require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workout')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) 

//routes
app.use('/api/workouts', workoutRoutes)

//listen port request
app.listen(process.env.PORT, ()=>{
    console.log('Listening on port', process.env.PORT)
})