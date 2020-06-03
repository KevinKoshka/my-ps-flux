## React Pluralsight Course
### Setup
1. Bootstrapped app with `npx create-react-app ps-flux` that installed everything I'll need. With that I can run `yarn start` to start the local web server. It also initiates a git repository. It uses `yarn`
2. Ran `yarn add flux@3.1.3 react-router-dom@5.0.0 bootstrap@4.3.1`. Used those specific versions for course purposes.
3. Deleted default content in `src/index.js` and imported **bootstrap** css file there with the help of webpack magic.
4. `yarn add -D cross-env@5.2.0 npm-run-all@4.1.5 json-server@0.15.0` installed development dependencies needed for (respectively):
   - Creating and setting custom cross-platform env. variables.
   - Running concurrent **npm** scripts.
   - Serves our mocked data we will create later.
5. Copied **Chapter 3 before/** `tools` folder into `ps-flux/`. This folder has three important files:
   - `apiServer.js`: starts the json server in port 3001 by default.
   - `createMockDb.js`: creates a mock DB from `mockData.js` into `db.json`. This one needs to be run once or when we need to reset the DB.
6. Defined a new **start** script to start both the mock API and the client-side server.
7. Copied **Chapter 3 after/** `api` folderinto `ps-flux/src`, which defines endpoints behaviour.
8. In order to dynamically define API URL I added a custom `REACT_APP_API_URL` env. variable using cross-env.
### Tune Up
1. In order to get the benefits of IDE automatic typechecking that Typescript offers, without actually using Typescript I installed **Document This** extension in **VS Code** to generate (somewhat)automatic [**JSDoc**](https://jsdoc.app/) documentation over our React code and **TSLint** extension for automatic linting that will pick up the JSDoc.
2. Also for the sake of documenting the React development steps I added the **TODO Tree** extension with my own custom `FYI - (step)` tag.

[**DOCU**](out/index.html)