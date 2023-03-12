import React from 'react';
import '../styles/about.css';
import Portrait from '../images/clay-portrait.jpg';


function About() {
    return (
         <div className="about">
            <div className="card-header">
                <div className="card-title">
                    <img src={Portrait} alt="Clay's Portrait" className="portrait"/>
                    <h2>Clayton McKee</h2>
                </div>
                <ul className="title-list">
                    <li>Full Stack Developer</li>
                    <li>Translator</li>
                    <li>Writer and Editor</li>
                </ul>
            </div>
            <div className="about-info">
                <p>My name is Clay and I am currently taking part in UCLA's Full Stack Coding Bootcamp. The many hours that I've spent studying and practicing coding have allowed me to accept various projects to create sites and applications for businesses and friends. In addition to an ongoing project coding and customizing a site for a beverage distributor, I am also managing their marketing from logo design to social media/SEO.</p>
                <p>I have recently left higher education where I taught literature classes and conducted academic research in Arabic, English, French, and Spanish. I thrive in a both solitary and collaborative coding environments when I am able to combine my analytic, logic, and research skills with writing and creative skills that I've developed throughout my career. Not only do I strive to write airtight, accessible, and clear code, but I aim to treat every project as an opportunity to present a full product with quality writing and appearance. </p>
            </div>
        </div>
    )
};

export default About;