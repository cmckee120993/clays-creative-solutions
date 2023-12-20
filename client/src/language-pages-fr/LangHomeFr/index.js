import React from 'react';
import './style.css';


function Language() {
    return (
        <>
            <div className='web-home'>
                <h2 className='title'>Écriture, Rédaction et traduction</h2>

                <div className='paragraph'>
                    <p className='home-description'>
                      Mes expériences en matière d'édition, de traduction et d'écriture sont vastes et s'étnedent tout au long
                      de ma carrière universitaire et créative. J'étais le redacteur pour une variété de clients, notamment des
                      créatifs et des univseritaires. En plus de mes propres écrits académiques et créatifs, j'ai écrit des textes 
                      académiques, des articles de blog, des documents de marketing et de la fictions en tant que prête-plume.
                      J'avais également le plaisir de traduire de la littérature, des essais académiques, des contrats et des documents
                      officiels. J'écris et je traduis chaque jour pour des projets personnels et pour des clients. Jetez un œil à  
                      <a className='internal-link' href='/fr/resume'>mon CV</a> pour découvrir plus sur mes expériences professionnelles. 
                      Vous pouvez également consulter mon blog personnel <a href='www.clayslitreview.com' rel='noreferrer' target='_blank'>
                      Clay's Lit Review</a> ou mon organisation à but non lucratif <a href='www.trafikaeurope.org' rel='noreferrer' target='_blank'>
                      Trafika Europe</a> pour des exemples de mes écrits, revisions, mises en forme et traductions. J'ai hâte de travailler avec vous!
                    </p>
                </div>
            </div>
            <div className='site-options'>
            <a className='option-link' href='/fr/resume'>
                    <div className='square-4 square'>
                        <h2 className='site-option' lang='fr'>CV</h2>
                    </div>
                    </a>
                    <a className='option-link' href='/fr/language-rates'>
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
        </>
    )
};

export default Language;