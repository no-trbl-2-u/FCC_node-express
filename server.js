const env = require('dotenv')
const express = require('express')
const path = require('path')
const people = require('./data/people.json')

// Exercise Six (1 of 2)
env.config()

// Instantiate App
const app = express()

// Exercise Four
app.use(express.static(__dirname + '/public'))

// Exercise Three
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

// Exercise Two (2 of 2)
app.get('/exercise-two', (req, res) => {
  res.send("Hello Express")
})

// Exercise Five
app.get('/api/people', (req, res) => {
  res.send(people)
})

// Exercise Two (1 of 2)
app.listen(
  // Exercise Six (2 of 2)
  process.env.PORT,
  () => console.log(`Now Listening on Port ${process.env.PORT}...`)
)

// Exercise One
console.log('Exercise One:', 'Hello World')
