// Import the express package using ESM
import express from 'express';

// Create an instance of the express app
const app = express();

// Set up a route for the homepage
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Set the port number
const port = 3000;

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
});


//Start your server: node app
// ==> You can then navigate to http://localhost:3000 in your web browser to see the results.