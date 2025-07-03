const express = require('express'); // Import the express module
const { homedir } = require('os');
const app = express(); // create an express application
const port = 3000; // define the port number

app.get ('/', (req, res) => { // define a route for the default URL
    res.sendFile(__dirname + '/index.html') // send a response to the client
});


app.get ('/index', (req, res) => { // define a route for the default URL
    res.sendFile(__dirname + '/index.html') // send a response to the client
});

app.get ('/joke', (req, res) => { // define a route for the default URL
    res.sendFile(__dirname + '/joke.html') // send a response to the client
});

app.get ('/random_stuff', (req, res) => { // define a route for the default URL
    res.sendFile(__dirname + '/random_stuff.html') // send a response to the client
});

app.get ('/1op', (req, res) => { // define a route for the default URL
    res.sendFile(__dirname + '/test/???.html') // send a response to the client
});

app.listen (port, () => { //start the server and listen on the specified port
    console.log('server is running on http://localhost:${port}'); // log a message to the console
});
