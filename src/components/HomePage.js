import React from 'react';

/*
    FYI - 1
    By JS convention we use PascalCase for React components for functions that
    will be instantiated. Also JSX discrimintes react components from HTML native
    components this way
*/

/*
    FYI - 4
    For react JSDoc the return type for all React Components is JSX.Element.
*/

/**
 * @description HomePage component.
 * @typedef {function(): JSX.Element } HomePage
 */
export function HomePage(){
    return (
        <div className="jumbotron">
            <h1>Pluralsight Administration</h1>
            <p>React, Flux, and React Router for ultra-responsive web apps.</p>
            <a href="/about">About</a>
        </div>
    );
}
