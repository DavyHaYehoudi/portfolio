import React from 'react';

const OtherSkills = () => {
    return (
        <div className='otherSkills'>
            <h3>Autres skills</h3>
            <div className='list'>
                <ul>
                    <li><i className='fas fa-check-square'></i> Anglais - Hébreu</li>
                    <li><i className='fas fa-check-square'></i> Github</li>
                    <li><i className='fas fa-check-square'></i> SEO</li>
                    <li><i className='fas fa-check-square'></i> CMS<a href='https://www.unitech-groupe.com/' rel="noopener noreferrer" target="_blank" style={{textDecoration:"underline", color:"#ddd", marginLeft:"5px"}}>Demo</a></li>
                </ul>
                <ul>
                    <li><i className='fas fa-check-square'></i> Emailing - Spams</li>
                    <li><i className='fas fa-check-square'></i> UI/UX Design</li>
                    <li><i className='fas fa-check-square'></i> Metronic - Bootstrap</li>
                    <li><i className='fas fa-check-square'></i> Hosting OVH-Firebase</li>
                </ul>
            </div>
        </div>
    );
};

export default OtherSkills;