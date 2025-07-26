/* node.js */

const http = require('http');

const server = http.createServer(function (req, res) {
    res.end('Hello, World!');
})

server.listen(3000);



/*
    Node.js core modules are those that come pre-installed with Node.js.
    Packages that are downloaded via npm are called packages.
*/

/*
    To create a package.json file, use:
        npm init
    To create package.json with default values, use:
        npm init -y
*/

/*
    To install a package:
        npm install <package-name>
    To uninstall a package:
        npm uninstall <package-name>
    To install a specific version:
        npm install <package-name>@<version>
*/

/*
    Dependencies: Packages required for your project to run.
    Dev Dependencies: Packages only needed for development (e.g., testing, linting) and not required after deployment.
*/

/*
    You can define scripts in package.json and run them using npm:
        "start": "node index.js"
    Run the script with:
        npm start
    Or run directly with:
        node index.js
    Using npm is preferred for script management and dependency handling.
    The "run" keyword in npm allows execution of scripts defined in package.json.
    "run" is not needed when running a script directly with node, or if the command is in your PATH.
*/
