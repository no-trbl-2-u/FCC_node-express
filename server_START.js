const env = require('dotenv')
const express = require('express')

//______________________________Config_____________________________________//

// Exercise Six (1 of 2) - Configure dotenv to use your .env file
// *hint - Find dotenv's npm page

// Instantiate App
const app = express()

//_______________________________Global Middleware__________________________//
/* 
          Feel free to write your middleware functions either inline
          or in the seperate module located at ./customMiddleware.js
*/ 

// Exercise Seven - Console Logger
// *hint - create a custom middleware function and don't forget to call next()

// Exercise Four - Serve Static Assets
// *hint - use your first middleware function: express.static()

// Exercise Ten (1 of 2) - Using body-parser to parse GET + POST requests
  // *hint - Create two instanes of the middleware, one for each possible format
  // For parsing application/json
  // For parsing application/x-www-form-urlencoded

//__________________________________Routes___________________________________//

// Exercise Three - Serve an HTML file from a route
// *hint - use res.sendFile && require "path" to make filepath

// Exercise Two (2 of 2) - Create your first route with app.get(PATH, HANDLER)

// Exercise Five - Create an "api" route to serve JSON data

// Exercise Eight - Create a route that shows the current time
// *hint - Use new Date().toString() to keep it simple

// Exercise Ten - Create a route to utilize a query inside the URL
// *hint - Use the req.query to find your target query parameter
// *hint - Don't forget to add logic flow to keep the query parameters limited

// Exercise Eleven (2 of 2) - HTML for GET requests and Body Parser for POST requests
// *hint - When method="GET" -> Serve an HTML document
// *hint - When method="POST" -> Send a response containing the user's input
//   *hint - A simple res.send(USER_INPUT) will suffice

// Exercise Nine - Create a route that shows the current time
// *hint - To use a dynamic URL, use "/:URL", now req.params.URL will be available
// *hint - Also, make sure this route stays down here. Since it's right off the root
//         It interferes with other routes.

//_______________________________Listen______________________________________//

// Exercise Two (1 of 2) - Get the server running
// *hint - use app.listen(PORT, CALLBACK_FUNCTION)
// *hint - for now, set PORT to 3000

// Exercise Six (2 of 2) - Use your newly configured ENV variable
// *hint - Use your new .env file to create a PORT for your app.listen()

// Exercise One (console.log)