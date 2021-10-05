import React from 'react'
import './TestContainer.css'

const TestContainer = (
    words,
    characters,
    wpm
) => {
    return (
        <div className="test-conainer">
            <div className="try-again-cont">
                <h1>This is try again</h1>
            </div>
        </div>
    );
};

export default TestContainer;