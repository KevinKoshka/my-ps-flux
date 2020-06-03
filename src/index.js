/*
    FYI - 2
    create-react-app checks into the index.js file to determine which modules to load.
*/
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
// Components
import { App } from './components/App';

/*
    FYI - 3
    'react-dom' will be our target renderer for our webapp. React Native is another example of renderer.
    The render() takes two arguments: the first one is the component we will render (in JSX syntax), and
    the second one is the selector in which it's going to be appended.
*/
render(<App />, document.getElementById('root'));