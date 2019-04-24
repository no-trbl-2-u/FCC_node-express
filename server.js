const express = require('express')
const path = require('path')
const config = require('./config')

// Instantiate App
const app = express()

// Serve up the scripts and styles from ./public
app.use(express.static(__dirname + '/public'))

// Serve up index page from ./views
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

app.get('/exercise-two', (req, res) => {
  res.send("Hello Express")
})

// Listen to PORT provided by config
app.listen(
  config.PORT,
  () => console.log(`Now Listening on Port ${config.PORT}...`)
)

// Exercise One
console.log('Exercise One:', 'Hello World')