import React from 'react';

const ProgressBar = (props) => {
    return (
        <div className='{props.className} '>
            <h3>{props.title}</h3>
            <div className='years'>
                <span>Année d'expérience</span>
                <span>1.5 année</span>
                <span>2.5 années</span>
            </div>

            <div>
                {
                    props.languages.map(item=>{
                        let xpYears = 2;
                        let progressBar= item.xp /xpYears *100 + '%';
                        return(
                            <div key={item.id} className="languagesList">
                                <ul>
                                    <li>{item.value}</li>
                                    <div className='progressBar' style={{width:progressBar} }></div>
                                </ul>
                            </div>
                        )
                    } )
                }
            </div>
        </div>
    );
};

export default ProgressBar;