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

// Exercise Seven - Console Logger
app.use(consoleLogger)

// Exercise Four - Serve Static Assets
app.use(express.static(__dirname + '/public'))

// Exercise Ten (1 of 2) - Using body-parser to parse GET + POST requests
app.use(parse.json())     // For parsing application/json
app.use(parse.urlencoded( // For parsing application/x-www-form-urlencoded
  { extended: true }
))

//__________________________________Routes___________________________________//

// Exercise Three
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/views/index.html'))
})

// Exercise Two (2 of 2) - Create your first route with app.get(PATH, HANDLER)
app.get('/exercise-two', (req, res) => res.send("Hello Express"))

// Exercise Five - Create an "api" route to serve JSON data
app.get('/api/people', (req, res) => res.send(people))

// Experiment in data persistance within chained middleware functions
app.get('/baseData', persistData, (req, res) => res.send(req.data))
app.get('/alterData', persistData, alterData, (req, res) => res.send(req.data))

// Exercise Eight
app.get('/now', getTime, (req, res) => res.send(req.time))

// Exercise Ten
app.get("/name",(req, res) => {
    // require the correct URL parameters
    if(req.query.first && req.query.last){
      res.send({name: `${req.query.first} ${req.query.last}`})
    }else{
      res.send("Incorrect query Parameters, Usage: /name?first=_&last=_")
    }
  })

// Exercise Eleven (2 of 2) - HTML for GET requests and Body Parser for POST requests
app.route("/post")
  // When method=GET: Send an html form
  .get((req, res) => res.sendFile(path.join(__dirname + '/views/form.html')))
  // When method=POST: Send a response containing their input
  .post((req, res) => {
    // NOTE: Does not receive the style from styles.css
    res.send(`<h1 class="response">Did you just type ${req.body.text}?</h1>`)
  })

// Experiment to see contents of request
// A little helper route to show all the keys on the request object
app.get('/req', (req, res) => {
  let list = + "<ul>" + Object.keys(req)
    .reduce(
      (accumKey, eaKey) => accumKey + " " + "<li>" + eaKey + "</li>"
      , " <-- How do I get rid of this?"
    ) + "</ul>"
  res.send(`${list}`)
})

// Exercise Nine
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
