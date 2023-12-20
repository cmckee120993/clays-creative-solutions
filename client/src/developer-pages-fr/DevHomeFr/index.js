import React from 'react';


function Developer() {
    return (
        <div className='web-home'>
            <h2 className='title'>Sites et marketing</h2>

            <div className='paragraph'>
                <h2 className='home-title'>Conceptions de site web et marketing</h2>
                <p className='home-description'>
                    Depuis 2015, je travaille pour une revue littéraire en tant que responsable de la communication,
                     graphise, développeur et traducteur. Au fil du temps, j'ai travaillé avec d'autres entreprises. Puis,
                     j'ai terminé des études de la programmation à l'université de Californie à Los Angeles en 2022. Depuis 
                     ce moment, je traville en tant que travailleur indépendant dans les domaines de marketing, développement web, 
                     traduction et rédaction. Parmi mes clients sont un coiffeur, une fleuriste, un magasin de bière et plus! Je suis 
                     prêt à aider votre entreprise avec tous vos besoins y compris un logo, une brochure, une carte ou un site. Je vous invite
                    à jeter un œil à <a className='internal-link' href='/fr/developer'>mon portfolio</a> pour plus d'information sur mes projets
                    ou à <a className='internal-link' href='/fr/resume'>mon CV</a> pour toutes mes expériences. J'ai hâte de travailler avec vous!
                </p>
            </div>
            <div className='site-options'>
            <a className='option-link' href='/fr/development-portfolio'>
                    <div className='square-4 square'>
                        <h2 className='site-option' lang='fr'>Dossier de développeur</h2>
                    </div>
            </a>
            <a className='option-link' href='/fr/development-rates'>
                    <div className='square-5 square'>
                        <h2 className='site-option' lang='fr'>Les frais</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/fr/contact'>
                    <div className='square-3 square'>
                        <h2 className='site-option' lang='fr'>Me Contactez</h2>
                    </div>
                    </a>
            </div>
        </div>
    )
};

export default Developer;