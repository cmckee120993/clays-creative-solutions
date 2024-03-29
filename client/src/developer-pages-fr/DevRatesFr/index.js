import React from 'react';
import Collapsible from 'react-collapsible';


function DevRatesFr() {
    return (
        <div className='rates-content'>
            <h2 className="title" lang='fr'>Les frais</h2>
            <div className='paragraph'>
            <p className="home-description">
                Même si ces frais sont basés sur les standards de l'industrie, tous les projets ont besoin d'une attention individuelle et/ou
                peuvent être adaptés pour tous les budgets. Le prix dépend sur le travail, la date limite et vos désirs. Chaque description donne
                l'information de base pour des projets typiques, mais c'est tout à fait possible que votre projet est différent. Me contactez pour discuter
                les détails et pour une estimation. Vous n'êtes pas obligé de me payer une avance sur honoraires pour garder mon aide (bien sûr, si quelque chose arrive, 
                vous pouvez me rapprocher et, si j'ai la capacité, je résoudrai les problèmes et vous enverrai une facture pour le boulot fait). Mais, il est vrai que 
                les sites peuvent avoir des problèmes (soit de design, d'hébergement, de code, etc.) et les problèmes peuvent être compliqués à résoudre. 
                Avec l'avance sur honoraires, vous me gardez en tant que travailleur pour une quantité d'heures spécifié chaque mois pour l'entretien de votre site
                et son hébergement. 
            </p>
            </div>
            <table className="rates-table" lang='fr'>
                <tr className="header-row">
                    <th>Service</th>
                    <th>Frais</th>
                    <th>Description</th>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Formule Simple (WordPress, Wix, ou un site pareil)</td>
                    <td className='center-data'>À partir de €500,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>1-5 pages de modèle</li>
                                    <li>Le référencement (Search Engine Optimization)</li>
                                    <li>L'accessibilité</li>
                                    <li>La personnalisation (les couleurs, les photos, l'écriture) selon les désirs du client</li>
                                    <li>L'aide d'hébergement et de domaine</li>
                                    <li>Tous les frais d'hébergement et de domaine sont payés par le client</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Avance sur honoraires, Formule Simple</td>
                    <td className='center-data'>À partir de €20,00/mois</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Une vérification mensuelle du référencement, la vitesse du site et l'accessibilité</li>
                                    <li>Une heure de temps dédiée à la résolution des erreurs, mises à jour, etc.</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Formule Simple Personnalisé (WordPress, Wix, etc.)</td>
                    <td className='center-data'>À partir de €750,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>1-5 pages uniques et personnalisés</li>
                                    <li>Une personnalisation complète du site (mise en page et design)</li>
                                    <li>Des meetings pour arriver à votre personalisation souhaitée</li>
                                    <li>Le référencement</li>
                                    <li>L'accessibilité</li>
                                    <li>Un design réactif (pour portable, tablette, ordinateur et ordinateur portable)</li>
                                    <li>Les plug-ins et des add-ons selon les désirs du client</li>
                                    <li>L'aide d'hébergement et de domaine</li>
                                    <li>Tous les frais d'hébergement et de domaine sont payés par le client</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Avance sur honoraires, Formule Simple Personnalisé</td>
                    <td className='center-data'>À partir de €30,00/mois</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Une vérification mensuelle du référencement, la vitesse du site et l'accessibilité</li>
                                    <li>Une heure de temps dédiée à la résolution des erreurs, mises à jour, etc.</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Formule Codage Utilisateur</td>
                    <td className='center-data'>À partir de €750,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">                    
                            <td>
                                <ul>
                                    <li>1-5 pages de HTML, CSS et Javascript</li>
                                    <li>Complètement personnalisé selon le désir du client</li>
                                    <li>Il n'y a pas de restrictions selon le design ou la mise en page</li>
                                    <li>Des meetings pour arriver à votre personnalisation souhaitée</li>
                                    <li>Le référencement</li>
                                    <li>L'accessibilité</li>
                                    <li>Un design réactif (pour portable, tablette, ordinateur et ordinateur portable)</li>
                                    <li>L'aide d'hébergement et de domaine</li>
                                    <li>Tous les frais d'hébergement et de domaine sont payés par le client</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Avance sur honoraires, Formule Codage Utilisateur</td>
                    <td className='center-data'>À partir de €50,00/mois</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Une vérification mensuelle du référencement, la vitesse du site et l'accessibilité</li>
                                    <li>Une heure de temps dédiée à la résolution des erreurs, mises à jour, etc.</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>

                <tr className='data-row'>
                    <td className='center-data'>Formule Full Stack (MongoDB/Base de données, Express, React/Angular, Node)</td>
                    <td className='center-data'>À partir de €1000,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>1-5 pages uniques et personnalisées</li>
                                    <li>Complètement personnalisé selon le désir du client</li>
                                    <li>Il n'y a pas de restrictions selon le design ou la mise en page</li>
                                    <li>Des meetings pour arriver à votre personnalisation souhaitée</li>
                                    <li>Le référencement</li>
                                    <li>L'accessibilité</li>
                                    <li>Un design réactif (pour portable, tablette, ordinateur et ordinateur portable)</li>
                                    <li>Une mise en œuvre d'une base de données personnalisée</li>
                                    <li>La sécurité et l'autorisation des comptes</li>
                                    <li>L'aide d'hébergement et de domaine</li>
                                    <li>Tous les frais d'hébergement et de domaine sont payés par le client</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Avance sur honoraires, Formule Full Stack</td>
                    <td className='center-data'>À partir de €75,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Une vérification mensuelle du référencement, la vitesse du site et l'accessibilité</li>
                                    <li>Une heure de temps dédiée à la résolution des erreurs, mises à jour, etc.</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
            </table>

            <h2 className="title" lang='fr'>Les Services de Marketing</h2>
            <div className='paragraph'>
            <p className="home-description" lang='fr'>
                Un site est juste une étape parmi plusieurs pour réussir. Si vous êtes en train de commencer votre business ou vous avez déjà
                établi une clientèle mais vous voulez un nouveau look, une approche innovante ou une entrée dans un autre marché, je suis là
                pour vous aider. Puisque j'aurai besoin de donner une estimation pour chaque de ces services, je n'ai pas écrit des frais ici. 
                Envoyez-moi un message ou appelez-moi et on peut discuter les détails. 
            </p>
            </div>
            <table className="rates-table" lang='fr'>
                <tr className="header-row">
                    <th>Catégorie</th>
                    <th>Possibilités</th>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Présence sur Internet</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Publicité et annonce de votre site sur Internet</li>
                                    <li>Création et entretien de profil Google Business</li>
                                    <li>Publicité sur les réseaux sociaux (Facebook, Instagram, Twitter, Tik Tok)</li>
                                    <li>Écriture et publicité pour le référencement du site</li>
                                    <li>Campagnes de marketing par email et/ou liste de diffusion électronique</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Dessin et Traitement Graphique</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Logo</li>
                                    <li>Signature d'e-mail</li>
                                    <li>Campagne de publicité</li>
                                    <li>La photographie et le retouchement des photos</li>
                                    <li>Cartes de visite</li>
                                    <li>Carte de restaurant</li>
                                    <li>Brochures et flyers</li>
                                    <li>Image d'entreprise et établir une marque</li>
                                    <li>Mise en page et impression des matériaux</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Écriture et Traduction</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                            <td>
                                <ul>
                                    <li>Plan de développement</li>
                                    <li>E-mails</li>
                                    <li>Contenu du site web</li>
                                    <li>Demande des bourses, des crédits, etc. </li>
                                    <li>Article, article de blog, des annonces, etc.</li>
                                    <li>Postes sur les réseaux sociaux</li>
                                    <li>Cartes de restaurants, brochures, flyers, etc.</li>
                                    <li>Traduction pour accéder des nouveaux clients en anglais, arabe, français et/ou espagnol</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
            </table>
        </div>
    )
};

export default DevRatesFr;