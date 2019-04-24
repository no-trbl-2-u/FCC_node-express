const express = require('express')
const path = require('path')
const config = require('./config')
const people = require('./data/people.json')

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
  config.PORT,
  () => console.log(`Now Listening on Port ${config.PORT}...`)
)

// Exercise One
console.log('Exercise One:', 'Hello World')
