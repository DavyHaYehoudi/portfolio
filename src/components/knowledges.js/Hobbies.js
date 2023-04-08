import React from 'react';

const Hobbies = () => {
    return (
        <div className='hobbies'>
            <h3>Hobbies</h3>
            <ul>
                <li className='hobby'><i className='fas fa-running'></i><span>Running</span></li>
                <li className='hobby'><i className='fas fa-chess'></i><span>Echecs</span></li>
                <li className='hobby'><i className='fas fa-swimmer'></i><span>Natation</span></li>
                <li className='hobby'><i className='fas fa-book-reader'></i><span>Lecture</span></li>
                <li className='hobby'><i className="fas fa-music"></i><span>Piano</span></li>
            </ul>
            
        </div>
    );
};

export default Hobbies;