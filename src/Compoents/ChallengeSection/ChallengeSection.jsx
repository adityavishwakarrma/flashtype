import React from 'react';
import './ChallengeSection.css'
import TestContainer from '../TestContainer/TestContainer';

const ChallengeSection = () => {
    return (
        <div className="challenge-section-container">
            <h1 data-aos="fade-down" className="challenge-section-header">
                Take a speed test Now!
            </h1>
            <TestContainer words={4} characters={14} npm={14} />
        </div>
    );
}

export default ChallengeSection;