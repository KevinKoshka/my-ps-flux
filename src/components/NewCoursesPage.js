import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

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

    function renderCourses(courses) {
        if (courses.length) {
            return courses.map(course => {
                return (
                    <tr key={course.id}>
                        <td>{course.title}</td>
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