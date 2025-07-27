// Express.js Framework:
// Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
// It is a framework and an NPM package that simplifies the process of building web applications and APIs.
// It manages routing, middleware, and HTTP requests and responses (i.e., the request/response cycle from receiving requests and giving responses).
// To use Express.js, you need to install it via npm:
// npm install express

// nodemon -> A utility that monitors changes in your source code and automatically restarts your Node.js application.

const express = require('express'); // express module is imported
const app = express();

// The express module is used to create an Express application instance
// The app variable is an instance of the Express application, which can be used to define routes
// and middleware for handling HTTP requests and responses.

// Middleware in Express.js:
// Middleware functions are functions that have access to the request and response objects in the request/response cycle.
// They can modify the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
// Middleware functions can be used for tasks like logging, authentication, parsing request bodies, and handling errors.
// In Express.js, you can define middleware using app.use() or app.METHOD() where METHOD is an HTTP method like get, post, etc.
// For example,
// app.use((req, res, next) => { console.log('Request received'); next(); });
// This middleware logs 'Request received' for every incoming request and then calls next() to pass control to the next middleware function or route handler.
// Middleware can be applied globally or to specific routes,
// allowing you to control the flow of requests and responses in your application.

// Middleware:
// req, res, next are used to handle the request, response, and control flow in the middleware.
app.use((req, res, next) => { 
    console.log("First Middleware");
    next(); // next() is called to pass control to the next middleware function in the stack
});

app.use((req, res, next) => {
    console.log("Second Middleware");
    next(); // next() is called to pass control to the next middleware function in the stack
});

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

// these middlewares will be executed for every request made to the server whether it is a GET, POST, PUT, DELETE, etc.

// Routing in Express.js:
// Routing refers to how an application's endpoints (URIs) respond to client requests.
// In Express.js, routing is defined using methods like app.get(), app.post(), app.put(), app.delete(), etc.
// Each method corresponds to an HTTP request method and takes a route path and a callback function as arguments.
// The callback function is executed when the specified route is accessed, allowing you to handle the request and send a response.
// For example, app.get('/', (req, res) => { res.send('Hello World!'); }) defines a route for GET requests to the root URL
// ('/') that sends a 'Hello World!' response.

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.get('/contact', (req, res, next) => {
    return next(new Error('Contact Page Error')); // This will trigger the error handling middleware
    // res.send('Contact Page'); // This line will not be executed due to the error
});

// Dynamic routing example:
// This route will handle requests to user profiles, e.g., /profile/johndoe
// It will render a profile page with the username extracted from the URL
// The username is passed as a parameter in the URL
// Instead of rendering a static page, it will dynamically generate content based on the username
// Instead of creating a route for each user, we use colon in the route to indicate a dynamic routing and because of that we can handle many users with a single route
app.get("/profile/:username", (req, res) => { // Dynamic route to handle user profiles
    // Extract the username from the request parameters
    const username = req.params.username;
    res.send(`Profile page of ${username}`);
})

app.get("/profile/:username/:age", (req, res) => {
    // Extract the username and age from the request parameters
    const username = req.params.username;
    const age = req.params.age;
    res.send(`Profile page of ${username}, Age: ${age}`);
})

// Error Handling Middleware
// This middleware is used to handle errors that occur during the request/response cycle.
// It takes four arguments: err, req, res, and next.
// The err argument contains the error object, while req and res are the request and response objects
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // This sends a 500 Internal Server Error response to the client and will be displayed in the frontend.
});

app.listen(3000);

// Middlewrae -> Jab bhi server server request accept karta hai waha se route ke beech pahuchne tak agar aap us request ko beech nein rokte ho and kcuh oerform karte ho, to ye element middleware kehlata hai.
