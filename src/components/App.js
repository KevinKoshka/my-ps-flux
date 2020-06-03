import React from 'react';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';

/**
 * @description Main app entry component.
 * @typedef {function(): AboutPage | HomePage} App
 */
export function App() {
    const location = window.location.href;
    console.log(location);
    return location === 'about' ?
        (<AboutPage/>) :
        (<HomePage/>);
}