import React from 'react';
import { getCourses } from "../api/courseApi";

export class CoursesPage extends React.Component {
    /*
        FYI - 6
        Class components may also be initialized with a constructor like this:

        constructor(props) {
            super(props);
            this.state = {
                courses: []
            };
        }
    */

    /**
     * @typedef {import('../api/courseApi').Course} Course
     */

    /**
     * @namespace
     * @property {Course[]} courses - courses string array
     */
    state = {
        courses: []
    };

    componentDidMount() {
        getCourses().then((courses) => {
            this.setState({ courses: courses });
        });
    }

    /**
     * @param {Course[]} courses - courses string array
     * @returns {JSX.Element[]}
     */
    renderCourses(courses) {
        if (courses.length) {
            return courses.map(course => {
                return (
                    <tr>
                        <td>{course.title}</td>
                        <td>{course.authorId}</td>
                        <td>{course.category}</td>
                    </tr>
                )
            })
        }
    }
    render() {
        return (
            <>
                <h2>Courses</h2>
                <table className="table">
                    <thead>
                        <th>Title</th>
                        <th>Author ID</th>
                        <th>Category</th>
                    </thead>
                    <tbody>
                        {this.renderCourses(this.state.courses)}
                    </tbody>
                </table>
            </>
        );
    }
}