const env = require('dotenv')
const express = require('express')
const morgan = require('morgan')
const fs = require('fs')
const path = require('path')
const parse = require('body-parser')
const people = require('./data/people.json')
const { consoleLogger, persistData, alterData, getTime } = require('./customMiddleware')


//______________________________Config_____________________________________//

// Exercise Six (1 of 2)
env.config()

// Logger config (append mode)
const logStream = fs
  .createWriteStream(
    path.join(__dirname,'logs/access.log'),
    { flags: 'a' }
  )

// Instantiate App
const app = express()

//_______________________________Global Middleware__________________________//

// Instantiate Logger
const logger = morgan('common', {stream: logStream})
app.use(logger)

// Exercise Six - Console Logger
app.use(consoleLogger)

// Exercise Four
app.use(express.static(__dirname + '/public'))

//__________________________________Routes___________________________________//

// Exercise Three
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

// Exercise Two (2 of 2)
app.get('/exercise-two', (req, res) => res.send("Hello Express"))

// Exercise Five
app.get('/api/people', (req, res) => res.send(people))

// Experiment in data persistance within chained middleware functions
app.get('/baseData', persistData, (req, res) => res.send(req.data))
app.get('/alterData', persistData, alterData, (req, res) => res.send(req.data))

// Exercise Seven
app.get('/now', getTime, (req, res) => res.send(req.time))

// Exercise Nine
app.route("/name")
  .get((req, res) => {
    // require the correct URL parameters
    if(req.query.first && req.query.last){
      res.send({name: `${req.query.first} ${req.query.last}`})
    }else{
      res.send("Incorrect query Parameters, Usage: /name?first=_&last=_")
    }
  })
  .post((req, res) => res.send(req.query))

// Exercise Ten (Body Parser for POST requests)

// Exercise Eight
app.get('/:word', (req, res) => res.send(`You entered in ${req.params.word}!`))

//_______________________________Listen______________________________________//

// Exercise Two (1 of 2)
app.listen(
  // Exercise Six (2 of 2)
  process.env.PORT,
  () => console.log(`Now Listening on Port ${process.env.PORT}...`)
)

// Exercise One
console.log('Exercise One:', 'Hello World')
