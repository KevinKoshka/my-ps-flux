import React from 'react';

export const ManageCoursePage = props => {
    return (
        <>
            <h2>Manage Course</h2>
            { props.match.params.slug }
        </>
    )
}
