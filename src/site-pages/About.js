import React from 'react';

import Portrait from '../images/clay-portrait.jpg';


function About() {
    return (
        <div className='about-div'>
            <h2>Clayton McKee</h2>
            <ul>
                <li><strong>Full Stack Developer</strong></li>
                <li><strong>Marketer and Designer</strong></li>
                <li><strong>Translator and Writer</strong></li>
            </ul>
            <img
                src={Portrait}
                alt="Portrait of Clayton McKee"
                className='about-portrait'
            />
            <p>
                My name is Clay and I am a freelance web developer, marketer, and translator. 
                I split time between Carlisle, Pennsylvania and Nice, France where I have started 
                to work with various clients. Check out my <a href='/development'>Web Marketing Projects</a> and my
                <a href='/translation'>Translation/Writing Projects</a> for more details. I am a bibliophile at hear, which is 
                what led me to receive a Master's in Comparative Literature from Penn State in 2017 and to advance
                to doctoral candidacy—a fancy way to say I completed all requirements except for the dissertation—in 
                Comparative Literature at the University of California, Los Angeles. My love for literature and languages
                led me to translation as a career whether it be literary, technial, financial, legal, etc.
                This love for words then led to me to complete a certificate in Full Stack Web Development also from UCLA.
                I now combine my analytical, writing, linguistic, coding, and design schools to supply full web marketing 
                and translation services to clients around the globe.
            </p>
            <br />
            <p>
                I thrive in both solitary and collaborative environments. When first working with a client, we will sit down
                and discuss details about your needs and how I can best serve them. I will collect information on whatever services
                you request—colors, design, information, etc.—and we will agree on a timeline and a price. As I work independently, 
                I supply updates to the client so they see the current status and can provide feedback along the way. If you choose
                to hire me, I promise high-quality writing, code, design, and service every step along the way. 
                For more details about my qualifications, please take a look at my full <a href='/resume'>Résumé</a>.
            </p>
        </div>
    )
};

export default About;