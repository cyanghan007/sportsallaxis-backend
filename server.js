// Dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const db = mongoose.connection
const Scores = require('./models/scores')
const scoresData = require('./utilities/data')



// Environment Variables
const app = express();
const mongoURI = process.env.MONGO_URI
const PORT = process.env.PORT || 3001

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
    () => console.log('MongoDB connection established:', mongoURI)
)


// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!


// Routes
const scoresController = require('./controllers/scores')

app.use('/scores', scoresController)

app.get('/seed', async (req, res) => {
    await Scores.deleteMany({})
    await Scores.insertMany(scoresData)
    res.send('done!')
})

// My port
app.listen(PORT,() => {
    // This will create a hyperlink in the terminal that will take you straight to the page
    console.log(`I am listening on http://localhost:${PORT}/`) 
})