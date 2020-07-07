import React from 'react';
import { Switch, Route } from 'react-router-dom';
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

    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path="/about" component={ AboutPage } />
                <Route path="/courses" component={ CoursesPage } />
                <Route path="/newCourses" component={ NewCoursesPage } />
                <Route path="/" exact component={ HomePage } />
            </Switch>
        </div>
    );
}