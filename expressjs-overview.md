# Express.js Overview and Concepts

## What is Express.js?
Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications. It simplifies the process of creating web servers and APIs by managing routing, middleware, and HTTP requests/responses.

- **Framework & NPM Package:** Express.js is both a framework and an npm package. To use it, install via npm:
  ```sh
  npm install express
  ```

## Creating an Express Application
To start using Express.js, import the module and create an application instance:
```js
const express = require('express'); // Import express module
const app = express(); // Create an Express application instance
```

The `app` variable is now an instance of the Express application, which you can use to define routes and middleware for handling HTTP requests and responses.

## Routing in Express.js
Routing refers to how an application’s endpoints (URIs) respond to client requests. In Express.js, routing is defined using methods like `app.get()`, `app.post()`, `app.put()`, `app.delete()`, etc. Each method corresponds to an HTTP request method and takes a route path and a callback function as arguments.

Example:
```js
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});
```

- The callback function is executed when the specified route is accessed, allowing you to handle the request and send a response.

## Middleware in Express.js
Middleware functions are functions that have access to the request (`req`) and response (`res`) objects in the request/response cycle. They can:
- Modify the request and response objects
- End the request-response cycle
- Call the next middleware function in the stack using `next()`

Middleware is used for tasks like logging, authentication, parsing request bodies, and error handling.

Example of global middleware:
```js
app.use((req, res, next) => {
  console.log("First Middleware");
  next(); // Pass control to the next middleware
});

app.use((req, res, next) => {
  console.log("Second Middleware");
  next();
});
```
- These middlewares will be executed for every request made to the server, regardless of the HTTP method.

### Middleware Definition (in Hindi):
Middleware -> Jab bhi server request accept karta hai, waha se route ke beech pahuchne tak agar aap us request ko beech mein rokte ho aur kuch perform karte ho, to ye element middleware kehlata hai.

## Error Handling Middleware
Express.js provides a special type of middleware for error handling. It takes four arguments: `err`, `req`, `res`, and `next`.

Example:
```js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!'); // Sends a 500 Internal Server Error response
});
```
- This middleware is used to handle errors that occur during the request/response cycle.

## Example: Triggering an Error
```js
app.get('/contact', (req, res, next) => {
  return next(new Error('Contact Page Error'));
  // res.send('Contact Page'); // This line will not be executed due to the error
});
```
- The above route triggers an error, which is then handled by the error handling middleware.

## nodemon
`nodemon` is a utility that monitors changes in your source code and automatically restarts your Node.js application. It is useful during development for faster feedback.

## Summary Table
| Concept         | Description |
|----------------|-------------|
| **Express.js** | Minimal, flexible Node.js web framework for building web apps and APIs |
| **Routing**    | Defines how endpoints respond to client requests using methods like `app.get()` |
| **Middleware** | Functions that process requests before they reach the route handler or after |
| **Error Handling Middleware** | Special middleware for handling errors in the app |
| **nodemon**    | Utility to auto-restart server on code changes |

---

**Key Points:**
- Express.js simplifies web server and API development in Node.js.
- Routing and middleware are core concepts for handling requests and responses.
- Error handling middleware is essential for robust applications.
- Use `nodemon` for efficient development.
