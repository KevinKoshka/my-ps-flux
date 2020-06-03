import React from 'react';

/**
 * @description AboutPage component.
 * @class AboutPage
 * @extends {React.Component}
 */
export class AboutPage extends React.Component {
    render() {
        return (
            /*
                FYI - 5
                The JSX code we'll return needs to be wrapped up by an enclosing tag.
                This could be done by wrapping it in a <div> tag, but if we don't feel
                like polluting our HTML needlesly, we could use a <React.Fragment> tag
                instead (or its shorthand <>, the empty tag).
            */
            <>
                <h2>About</h2>
                <p>This app uses React.</p>
            </>
        );
    }
}