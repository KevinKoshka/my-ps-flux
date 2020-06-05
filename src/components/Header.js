import React from 'react';

/**
 * @typedef {function(): JSX.Element} Header
 */
export function Header() {
    return (
        <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/courses">Courses</a>
        </nav>
    );
}