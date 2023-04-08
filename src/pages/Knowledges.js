import React from 'react';
import Experience from '../components/knowledges.js/Experience';
import Hobbies from '../components/knowledges.js/Hobbies';
import Languages from '../components/knowledges.js/Languages';
import OtherSkills from '../components/knowledges.js/OtherSkills';
import Navigation from '../components/Navigation';

const Knowledges = () => {
    return (
        <div className='knowledges'>
            <Navigation />
            <div className='knowledgesContent'>
                <Languages />
                <Experience />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Knowledges;