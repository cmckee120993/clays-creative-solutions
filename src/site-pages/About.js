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
                <p>My name is Clay and I am a former academic that never lost his desire to learn new skills. 
                    I am a Ph. D. candidate in Comparative Literature at the University of California, Los Angeles,
                    and I hold a certificate in Fullstack Web Development from UCLA. My variety of educational experiences
                    allow me to be perfectly poised to help you with a variety of tasks ranging from translation, editing, 
                    writing, marketing, company image, websites, etc. I take on all types of clients ranging from individuals 
                    wanting to publish a book to large companies who need a new site/application created for their newest project.
                    No matter what you're hoping to accomplish, I am pleased to work with any budget and any desires. Don't
                    hesitate to reach out with your project for an estimate or to see if I can help you achieve your goals.</p>
                <p>I have recently left higher education where I taught literature classes and conducted academic research in 
                    Arabic, English, French, and Spanish. I thrive in a both solitary and collaborative environments when I am 
                    able to combine my analytic, logic, and research skills with writing and creative skills that I've developed 
                    throughout my career. Every project is an opportunity to present a perfect product with quality 
                    writing and appearance. I'm here to give you what you want in a timeframe that is fitting for the project at a 
                    price that you can afford.</p>
            </div>
        </div>
    )
};

export default About;