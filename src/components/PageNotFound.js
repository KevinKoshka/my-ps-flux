import React from 'react';
import { Link } from 'react-router-dom';

export function PageNotFound() {
    return (
        <div>
            <h2>Page not found</h2>
            <p>
                <Link exact to="/">Back to Home</Link>
            </p>
        </div>
    )
}