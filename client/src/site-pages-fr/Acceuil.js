import React from 'react';
import '../styles/home.css';
import Logo from '../images/clays-logo.webp';

function Acceuil() {
    return (
        <div className='home'>
            <div className='home-welcome'>
            <div className='logo-div'>
                <a href='https://clayscreativesolutions.com'>
                    <img  
                        src={Logo}
                        alt="Clay's Creative Solutions Title Banner"
                        className='header-logo'
                    />
                </a>
            </div>
                <div className='web-welcome'>
                    <div className='intro'>
                    <h2 className='home-title' lang='fr'>Le webmarketing et la création des sites web en anglais, arabe, français et espagnol</h2>
                    <p className='home-description' lang='fr'>Je m'appelle Clayton McKee et je vous promets d'être votre guichet unique pour tous 
                        vos besoins de site web, marketing et/ou traduction. Je suis prêt à travailler avec vous dans toutes les domaines, soit
                        pour mettre au jour votre site web, pour aider avec le nouveau look de votre entreprise, pour créer ce look à partir de rien, pour accéder 
                        aux nouveaux clients ou une combinaison! Jetez un œil à mon <a className='internal-link' href='/fr/development-portfolio'>Dossier de développeur</a> &nbsp; 
                        pour des projets déjà terminés, mon <a className='internal-link' href='/fr/resume'>CV</a> pour des qualifications générales ou mon &nbsp;
                        <a className='internal-link' href='/fr/translation'>Dossier de traducteur</a> pour une liste des publications et des services. 
                        J'ai hâte de travailler avec vous !
                    </p>
                </div>
                </div>
                </div>
                <div className='site-options'>
                <a className='option-link' href='/fr/development'>
                    <div className='square-1 square'>
                        <h2 className='site-option' lang='fr'>Sites et Webmarketing</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/fr/language'>
                    <div className='square-2 square'>
                        <h2 className='site-option'>Traduction et Révision</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/fr/contact'>
                    <div className='square-3 square'>
                        <h2 className='site-option'>Me contactez</h2>
                    </div>
                    </a>
                </div>
            </div>
    )
};

export default Acceuil;