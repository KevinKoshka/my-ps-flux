import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { HomePage } from './HomePage';
import { AboutPage } from './AboutPage';
import { Header } from './Header';
import { CoursesPage } from './CoursesPage';
import { NewCoursesPage } from './NewCoursesPage';
import { PageNotFound } from './PageNotFound';
import { ManageCoursePage } from './ManageCoursePage';

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
                <Route path="/course/:slug" component={ ManageCoursePage } />
                <Route path="/course" component={ ManageCoursePage } />
                <Route path="/" exact component={ HomePage } />
                <Redirect from="/about-page" to="/about"></Redirect>
                <Route component={ PageNotFound }/>
            </Switch>
        </div>
    );
}