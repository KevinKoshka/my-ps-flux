import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import { Link } from "react-router-dom";
/**
 * @typedef {import('../api/courseApi').Course} Course
 * @description NewCoursesPage component.
 * @typedef {function(): JSX.Element } NewCoursesPage
 */
export function NewCoursesPage() {
    const [courses, setCourses] = useState([]);

    /*
        FYI - 8
        The second parameter in useEffect() is the "dependency array", which tells React
        what variables it should be watching for changes to run the callback. If no parameter
        is provided, the callback will be called on every render cycle. If the parameter is
        an empty array, it will be run once, same as componentDidMount().
    */

    useEffect(() => {
        getCourses().then((courseArray) => {
            setCourses(courseArray);
        })
    }, [])
    /**
     * @typedef { function(): JSX.Element } renderCourses
     * @param {Course[]} courses
     */
    function renderCourses(courses) {
        if (courses.length) {
            return courses.map(course => {
                return (
                    <tr key={course.id}>
                        <td><Link to={ "/course/" + course.slug }>{course.title}</Link></td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                )
            })
        }
    }

    return (
        <>
            <h2>Courses</h2>
            <Link className="btn btn-primary" to="/course">Add Course</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Author ID</th>
                    </tr>
                </thead>
                <tbody>
                    {renderCourses(courses)}
                </tbody>
            </table>
        </>
    );
}