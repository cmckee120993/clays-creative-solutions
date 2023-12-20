import React from 'react';
import './style.css';


function Language() {
    return (
        <>
           <div className='web-home'>
             <h2 className='title'>Editing, Translating, and Writing</h2>
            
             <div className='paragraph'>
                    
                    <p className='home-description'> My experiences in editing, translating, and writing are extensive and span throughout my academic and creative careers.
                    I have edited for a variety of clients including creatives and academics. In addition to my own personal academic and creative writing,
                    I have ghostwritten academic texts, blog posts, marketing materials, and fiction. I have also had the pleasure of translating literature, academic materials, contracts,
                    and official documents. I write and translate everyday for personal projects and for clients. 
                    Take a look at my  <a className='internal-link' href='/resume'>Résumé</a> to check out my work expxeriences. You can also check out my personal blog <a href='www.clayslitreview.com' rel='noreferrer' target='_blank'>
                        Clay's Lit Review</a> or my non-profit organization <a href='www.trafikaeurope.org' rel='noreferrer' target='_blank'>Trafika Europe</a> for examples of my writing, editing, formatting, and translation.
                    I look forward to working with you!
                    </p>
                </div>

            <div className='site-options'>
                <a className='option-link' href='/resume'>
                    <div className='square-4 square'>
                        <h2 className='site-option'>Résumé</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/language-rates'>
                    <div className='square-5 square'>
                        <h2 className='site-option'>Rates</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/contact'>
                    <div className='square-3 square'>
                        <h2 className='site-option'>Contact Me</h2>
                    </div>
                    </a>
            </div>
        </div>
        </>
    )
};

export default Language;