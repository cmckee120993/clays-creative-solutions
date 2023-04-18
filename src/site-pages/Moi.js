import React from 'react';
import '../styles/about.css';
import Portrait from '../images/clay-portrait.webp';

function Moi() {
    return (
        <div className='about-content'>
         <div className="about">
            <div className="card-header">
                <div className="card-title">
                    <img src={Portrait} alt="Clay's Portrait" className="portrait"/>
                    <h2>Clayton McKee</h2>
                </div>
                <ul lang='fr'className="title-list">
                    <li>Développeur ful stack</li>
                    <li>Traducteur</li>
                    <li>Écrivain and Réviseur</li>
                </ul>
            </div>
            <div className="about-info">
                <p lang='fr'>
                    Je m'appelle Clayton McKee et j'étais un académique qui n'a jamais perdu le désir d'apprendre.
                    Je suis actuellement un doctorant dans le domaine de littérature comparée à l'Université de Californie à 
                    Los Angeles, et j'ai reçu une certification du développement web full stack, aussi de l'Université de Californie
                    à Los Angeles. La diversité de mes expériences me permettra de vous aider avec toutes sortes des tâches : la
                    traduction, la révision, l'écriture, le marketing, le look de votre entreprise, le design de votre site web, etc.
                    Je travaille avec une variété des clients y compris des individuels et des grandes entreprises. Peu importe ce que 
                    vous voulez accomplir, je suis là pour travaille avec tous les budgets et les désirs. N'hésitez pas à me contacter 
                    regardant votre projet pour une estimation ou pour voir si je peux vous aider à réaliser vos objectifs.
                </p>
                <p lang='fr'>
                    Récemment, j'ai décidé de sortir de l'éducation où j'ai enseigné des cours de littérature et de langue, et j'ai effectué des
                    recherches en anglais, arabe, français et espagnol. Je prospère dans des environnements solitaires et collaboratifs quand
                    je peux combiner mes compétences analytiques, logiques et investigatrices dans les domaines que j'ai développé à travers ma
                    carrière. Chaque projet est une opportunité de fournir un produit parfait avec une écriture et une apparence de qualité. 
                    Je suis là pour vous donner ce que vous voulez à un prix abordable dans une durée de temps qui fonctionne pour votre projet.
                    J'ai hâte d'en discuter avec vous !
                    </p>
            </div>
            
        </div>
      
     </div>
    )
};

export default Moi;