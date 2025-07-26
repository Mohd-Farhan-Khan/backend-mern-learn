# Node.js Core Modules and npm Packages

## Node.js Core Modules
Node.js comes with a set of core modules that are built into the runtime. These modules provide essential functionality and do not require installation via npm. Examples include:
- `http`: Used to create web servers and handle HTTP requests/responses.
- `fs`: File system operations (reading/writing files).
- `path`: Utilities for working with file and directory paths.
- `os`: Provides information about the operating system.

You can use these modules by requiring them in your code:
```js
const http = require('http');
```

## npm Packages
Packages that are not included with Node.js by default are called npm packages. These are third-party modules that you can install from the npm registry to add extra functionality to your project.

### Creating a `package.json` File
The `package.json` file is the heart of any Node.js project. It contains metadata about your project and manages dependencies, scripts, and more.
- To create a `package.json` file interactively:
  ```sh
  npm init
  ```
- To create a `package.json` file with default values:
  ```sh
  npm init -y
  ```

### Installing and Uninstalling Packages
- To install a package:
  ```sh
  npm install <package-name>
  ```
- To uninstall a package:
  ```sh
  npm uninstall <package-name>
  ```
- To install a specific version of a package:
  ```sh
  npm install <package-name>@<version>
  ```

### Dependencies vs Dev Dependencies
- **Dependencies**: Packages required for your project to run in production. These are listed under the `dependencies` section in `package.json`.
- **Dev Dependencies**: Packages only needed during development (e.g., testing, linting). These are listed under the `devDependencies` section and are not required after deployment.

### npm Scripts
You can define custom scripts in your `package.json` file to automate tasks like starting your server, running tests, or building your project. For example:
```json
"scripts": {
  "start": "node index.js"
}
```
- To run the script:
  ```sh
  npm start
  ```
- You can also run your app directly with:
  ```sh
  node index.js
  ```
- Using npm scripts is preferred for script management and handling dependencies.
- The `run` keyword in npm allows you to execute scripts defined in `package.json` (e.g., `npm run test`). For scripts named `start` or `test`, you can omit `run` (e.g., `npm start`).
- The `run` keyword is not needed when running a script directly with `node`, or if the command is in your PATH.

---

**Summary:**
- Use Node.js core modules for built-in functionality.
- Use npm to manage third-party packages and project scripts.
- Organize your project with a `package.json` file for better dependency and script management.
