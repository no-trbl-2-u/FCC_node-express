# Free Code Camp's Node Express Tutorial
*Due to a few minor complications with glitch.com I decided to handle this tutorial locally.*

## Curriculum
* ~~Meet the Node console~~
  * Log "Hello World" from the server
  * server.js - line 23

* ~~Start a Working Express Server~~
  * At the bottom of your code, use app.listen(PORT, HANDLER) to begin listening for other app.METHODs
    * server.js - line 21
  * Create another route via ```app.get()```
    * ```app.get()``` has the following format app.get(PATH: string, (req, res) => void)
      * server.js - line 16
  * set its path as the first argument to ```app.get()```
  * send "Hello Express" via the ```app.send()``` method

* ~~Serve an HTML File~~
  * Create another route and set its path
  * This time, instead of sending a string like "Hello Express":
    * Serve an HTML file you're written using the ```app.sendFile()``` method
      * First, import a library called "path" that is inherit in node (no need for npm)
      * Then, use the inherit global variable ```__dirname``` to calculate the path passed to ```path.join()```
      * server.js - line 12

* ~~Serve Static Assets~~
  * Create a directory that will be served to the client, typically "public", "static", "client" etc...
  * Using ```app.use()```, signal the app to use your new directory via the static method on the express object called ```express.static()```
  * ```express.static()``` is formatted as such:
    * express.static(PATH_TO_THE_STATIC_DIRECTORY)
    * Since this is another case of an **absolute path**, we will be using ```__dirname``` and ```path.join()```

* ~~Serve JSON on a Specific Route~~
  * To implement a **RESTful API**, we'll need to serve up a json file of our making
  * First, create your .json
    * Here we'll create a directory called data and place our json in there
  * Then using ```app.get()```
 
* ~~Use the .env File~~
  * The .env file is a hidden file used to store **environment variables** ie. PORT, Database URL, API Keys, etc.
  * First, create your .env file in your root directory.
    * The format for the variables declared here is as follows:
      * ```ENV_VARIABLE="value"```
      * Variable names, since their CONSTANTs, should be uppercase
      * There musn't be any spaces between the "=" in the assignment
  * Next, you'll need a package called **dotenv**
    * In your terminal, ```npm i dotenv --save```
  * Then, as early as possible in your server.js...
    * ```require('dotenv').config()``` - This will import your environment variables and place then in node's ```process.env``` object for you to be able to access your environment variables.
    * In our case, I like my requires to be together, so I split the function call.
      * server.js - line 1 (Imported the dotenv module)
      * server.js - line 7 (Called the _.config() method to place variables inside process.env)
  * Lastly, in order to use the variables, you can reference them off of the process.env object literal
    * server.js - line 32, 33 (```process.env.PORT ```)

* Implement a Root-Level Request Logger Middleware
* Chain Middleware to Create a Time Server
* Get Route Parameter Input from the Client
* Get Query Parameter Input from the Client
* Use body-parser to Parse POST Requests
* Get Data from POST Requests

## Notes
* Routes take the following structure:
  * app.METHOD(PATH: string, HANDLER: (req, res): void)
  * *ALSO* routes will be calculated from ***TOP** to **Bottom*** as they appear in the code

* When serving an HTML file via app.get(), the **header** information will be taken care of for you

* ```__dirname``` is a global variable in **Node** used to calculate the **absolute path**
  * e.g. absolutePath = __dirname + relativePath/file.ext.

* ```express.static()``` is a **middleware function**
  * **middleware functions** are functions that intercept **route handlers** and add some kind of information or functionality
    * **middleware functions** must be mounted using ```app.use()``` formatted as such:
      * app.use(path, middlewareFunction)
        * *The "path" argument is optional. If it is NOT provided, the middleware function will intercept **ALL current paths**

* ```app.get()``` is used to respond to **GET** requests from the client. 
  * GET is used in cases where the server will send information to the client **without modifying anything server-side**

* ```.env``` is normally included in the ```.gitignore``` in order to prevent your secret environment variables from being made public.
  * In our case, we'll leave it as is for educational purposes. It is important however to keep prevent this file from being posted online, ie. Github, Gitlab, etc...
* 