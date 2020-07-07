# React Pluralsight Course
## Setup
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
## Tune Up
1. In order to get the benefits of IDE automatic typechecking that Typescript offers, without actually using Typescript I installed **Document This** extension in **VS Code** to generate (somewhat)automatic [**JSDoc**](https://jsdoc.app/) documentation over our React code and **TSLint** extension for automatic linting that will pick up the JSDoc.
2. Also for the sake of documenting the React development steps I added the **TODO Tree** extension with my own custom `FYI - (step)` tag.
----------------------------------
## React Fundamentals
### Props and State
Data for React Components is stored both in **props** and **state**:
   - **Props** allow data to be passed from a parent component to its children components. React enforces one way data flow. **Props** in the parent are used like HTML attributes, and in the children they are received as properties of the `props` parameter. `props` is immutable, and if a change in it needs to be triggered from the child, it would have to call a parent function which may update its internal state.
   ```
   // parent
   <Avatar username="Cory"/>
   ```
   ```
   // child
   function Avatar(props) {
      return <img src="images/" + props.username />;
   }
   ```
   - **State** holds mutable data which is set with `setState()` in class components or you may use `useState` or `useReducer` hook in function components.
### Lifecycle of Components
Components lifecycle have three stages

| Mounting                   | Updating                                           | Unmounting                 |
| :------------------------: |:--------------------------------------------------:| :-------------------------:|
| constructor (classes only) | New **props** or **setState** or **forceUpdate()** |                            |
| render                     | render                                             |                            |
| React updates DOM and refs | React updates DOM and refs                         |                            |
| **componentDidMount()**    | **componentDidUpdate()**                           | **componentWillUnmount()** |

The first two steps while **Mounting** and **Unmounting** are the **Render Phases**, and they are run at the very beginning or when **props** or **state** change, or when it is forced to update. The render function usually returns JSX, but it may return other value types also; this function should be pure.
`componentDidiMount()` function is called when the component exists in the DOM. `componentDidUpdate()` is called after every update flushed to the DOM, and `componentWillUnmount` right before beign removed from the DOM.

### Hooks
**Hooks** are functions that let you _Hook into_ React state and lifecycle features from function components. There are built-in **hooks** but users can also define their own.
#### Effect Hook
All the operations that may change components and therefore can't be done during rendering are called _side-effects_. The **Efect Hook** `useEffect` has the ability to perform effects form function components, and serve the same purpose as `componentDidMount`, `componentDidUpdate` and `componentWillUnmount`. the `useEffect` callback is ran after  flushing changes to the DOM.
```
function Example() {
   const [count, setCount] = useState(0);

   // Similar to componentDidMount and componentDidUpdate:
   useEffect(() => {
      // Update the document title using the browser API
      document.title = `You clicked ${count} times`;
   });

   return (
      <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
         Click me
      </button>
      </div>
   );
}
```
By returning a function within the `useEffect` callback you get the same functionality as in classes' `componentWillUnmount`.
```
useEffect(() => {
   ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
   return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
   };
});
```
#### Rules of Hooks
- They can only be called at the top level of the component.
- They can only be called from React components or other custom hooks.

### Controller Views
They're components that has children components within, sets their props, and communicates with the store (if there was one).

## React Router
The package `"react-router-dom"` comes with three categories of components:
- **routers**: `<BrowserRouter>` and `<HashRouter>`
- **route matchers**: `<Route>` and `<Switch>`
- **navigation**: `<Link>`, `<NavLink>` and `<Redirect>`

### Routers
- **BrowserRouter** uses regular URL paths and needs the webserver to always serve the same base URL, which may require extra server configuration.
- **HashRouter** stores the location un the hash fragment of the URL which is never sent to the server.
```
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
```

### Route Matchers
**Switch** searches for its children **Route** components and chooses which one to display based on the URL.
```
function App() {
  return (
    <div>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact/:id">
          <Contact />
        </Route>
        <Route path="/contact">
          <AllContacts />
        </Route>

        {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
```

### Navigation
- The **Link** component renders an `<a>` tag.
- **NavLink** is like **Link** but it can style itself when the location matches.
- **Redirect** when rendered redirects to the specified URL.



[**DOCU**](out/index.html)