# Free Code Camp's Node Express Tutorial
*Due to a few minor complications with glitch.com I decided to handle this tutorial locally.*

## Curriculum
* ~~Meet the Node console~~
  * Log "Hello World" from the server
  * server.js - line 23
* ~~Start a Working Express Server~~
  * At the bottom of your code, use app.listen(PORT, HANDLER) to begin listening for other app.METHODs
  * Create another route via ```app.get()```
    * ```app.get()``` has the following format app.get(PATH: string, (req, res) => void)
  * set its path as the first argument to ```app.get()```
  * send "Hello Express" via the ```app.send()``` method
* ~~Serve an HTML File~~
  * Create another route and set its path
  * This time, instead of sending a string like "Hello Express":
    * Serve an HTML file you're written using the ```app.sendFile()``` method
      * First, import a library called "path" that is inherit in node (no need for npm)
      * Then, use the inherit global variable ```__dirname``` to calculate the path passed to ```path.join()```
* Serve Static Assets
* Serve JSON on a Specific Route
* Use the .env File
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
* ```__dirname``` is a global variable in **Node** used to calculate the absolute path
  * e.g. absolutePath = __dirname + relativePath/file.ext.
* 