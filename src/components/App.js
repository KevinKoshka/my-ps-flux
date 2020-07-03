import React from 'react';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { Header } from './Header';
import { CoursesPage } from './CoursesPage';
import { NewCoursesPage } from './NewCoursesPage';

/**
 * @description Main app entry component.
 * @typedef {function(): JSX.Element} App
 */
export function App() {
    const location = window.location.pathname;
    /**
     * @function
     * @param {string} relURL
     * @returns {AboutPage | HomePage}
     */
    function getPage(relURL) {
        switch (relURL) {
            case '/about':
                return <AboutPage/>;
            case '/courses':
                return <CoursesPage/>;
            case '/newCourses':
                return <NewCoursesPage/>;
            default:
                return <HomePage/>;
        }
    }

    return (
        <div className="container-fluid">
            <Header/>
            { getPage(location) }
        </div>
    );
}