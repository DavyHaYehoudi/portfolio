import React from 'react';
import Navigation from '../components/Navigation';
import ClipboardJS from "clipboard";

const Contact = () => {

    new ClipboardJS(".fa-solid");

    return (
        <div className='contact'>
            <Navigation />
            <div className='contactContent'>
                <div className='header'></div>
                    <div className='contactBox'>
                        <h1>Pour me contacter</h1>
                        <ul>
                            <li>
                                <i className='fas fa-map-marker-alt'></i>
                                <span>Israel - Tel Aviv</span>
                            </li>
                            <li>
                                <i className='fas fa-mobile-alt'></i>
                                 <span>053 8640333 </span>
                            </li>
                            <li>
                                <i className='far fa-envelope'></i>
                                <p>
                                 <span className='target'>d.sebbah@yahoo.fr 
                                   <i 
                                    title='Copy email adress'
                                    style={{marginLeft:'20px'}}
                                    class="fa-regular fa-clone clickInput"
                                    data-clipboard-action="copy"
                                    data-clipboard-target=".target"
                                    onClick={() => {alert('mail pasted')}}>
                                        
                                   </i>
                                 </span>
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className='socialNetwork'>
                        <ul>
                            
                                <a href='https://www.linkedin.com/in/davy-sebbah-2a2b4620b/' target="_blank" rel='noopener noreferrer'>
                                    <h4>LinkedIn</h4>
                                    <i className='fab fa-linkedin'></i>
                                </a>
                            
                            
                                <a href='https://github.com/DavyHaYehoudi?tab=repositories' target="_blank" rel='noopener noreferrer'>
                                    <h4>Github</h4>
                                    <i className='fab fa-github'></i>
                                </a>
                            
                            
                                <a href='' target="_blank" rel='noopener noreferrer'>
                                    <h4>Twitter</h4>
                                    <i className='fab fa-twitter'></i>
                                </a>
                           
                                <a href='https://www.linkedin.com/in/davy-sebbah-2a2b4620b/' target="_blank" rel='noopener noreferrer'>
                                    <h4>Facebook</h4>
                                    <i className='fab fa-facebook'></i>
                                </a>
                            
                        </ul>
                    </div>
                
            </div>
        </div>
    );
};

export default Contact;