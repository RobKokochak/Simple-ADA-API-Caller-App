# ADA API Caller

### Description
A Simple application that runs on your browser which retrieves data from the ADA API. Mostly used to familiarize with syntax for sending requests.

To run: Within the project directory, execute 'npm run build' in the terminal. Then, open index.html in your browser. Currently my bearer token is hard-coded in, so it should work (for 24 hrs?). Note: You'll need to re-execute npm run build each time you make changes, in order to see them compiled correctly in the browser. 

## Things to do
- Make it so the old data get's erased when you submit a new request
- Make the displayed data easier to read and/or filter the results** (Andrew said this would be tricky)
- Add more request options
- Make it look cooler (style it)
- ?? anything!

# Notes
Used an extension called browserify in order to be able to use 'require' syntax, which is require to get the axios api syntax to work within script.js. Added bundle.js to the project, as browserify needs a file to write to to 'combine' all of your js scripts (the functionality of which is beyond the scope of this simple project for now, just needed browserify for the added ability to use require syntax). Added "build": "browserify script.js -o bundle.js" to the package.json file within 'scripts' so that browserify automatically builds the project when you execute 'npm run build'.

