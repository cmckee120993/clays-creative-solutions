import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';


function TransRates() {
    return (
        <div className='rates-content'>
            <h2 className="rates-title" lang='fr'>Frais de Traduction et Révision</h2>
            <p className="rates-description" lang='fr'>
                Je propose une variété des services qui seront utiles pour tous vos projets et vos besoins.
                Regardez le tableau suivant pour une idée de ce qui est inclu dans chaque service. Je crée un 
                contrat qui décrit chaque projet et je commence après avoir reçu une avance sur honoraires, ce qui
                sera spécifiée sur le contrat. Cette avance garantit mon temps pour votre projet selon le contrat. 
                Les frais sont basés sur <a className='trans-link' href='https://www.the-efa.org/rates/' target='_blank' 
                rel='noreferrer'>l'Association de travailleurs indépendants de rédaction</a>, mais les frais dépendent sur 
                la taille du document, votre budget, la date limite désirée et le contrat. Envoyez-moi un email avec la
                description du projet, une date limite souhaitée et le service que vous voulez pour une consultation et 
                une estimation. Pour les projets plus longs, j'offre un échantillon de 1,000 mots au maximum. Les frais
                sont calculés selon la taille, la quantité de travail et la date limite.
            </p>
            <table className="rates-table" lang='fr'>
                <tr className="header-row">
                    <th>Service</th>
                    <th>Détails</th>
                    <th>Frais</th>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>La relecture correction</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Vérification d'orthographe</li>
                                    <li>Correction de grammaire et ponctuation</li>
                                    <li>Mise en forme des citations et du texte</li>
                                    <li>Vérification d'informations</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins..."> 
                                    <ul>
                                        <li>Littéraire: €36-€40/heure or €.02-€.03/mot</li>
                                        <li>Général: €41-€45/heure or €.03-€.04/mot</li>
                                        <li>Commerce/Vente: €46-€50/heure or €.04-€.05/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Mise en page et mise en forme</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Mise en forme du texte</li>
                                    <li>Images, tableaux, etc.</li>
                                    <li>Mise en page</li>
                                    <li>Les textes pour une publication électronique ou imprimée</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€46-€50/heure</li>
                                        <li>€.02-€.04/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Création d'index</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>À compléter après le texte est finalisé</li>
                                    <li>Arrangement par ordre alphabétique</li>
                                    <li>Sélection des termes, figures et expressions importants</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€36-€40/heure</li>
                                        <li>€.02-€.03/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Révision par ligne</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Concentration sur les phrases et les paragraphes</li>
                                    <li>Corrections des fautes (grammaire, orthographe et ponctuation)</li>
                                    <li>Révision concentré au niveau de langage et de style</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€46-€50/heure</li>
                                        <li>€.04-€.05/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Marketing et Promotion</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Promouvoir des textes, évènements, business etc.</li>
                                    <li>Création des stratégies pour faire de la publicité</li>
                                    <li>Communiqué de presse</li>
                                    <li>Création des publicités</li>
                                    <li>Jetez un œil aux autres possibilités pour des sites web</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€51-€60/heure</li>
                                        <li>€.08-€.09/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Relecture</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Attention aux erreurs typographiques</li>
                                    <li>Résolution des problèmes de mise en forme/page</li>
                                    <li>Comparaison des étapes du projet pour vérifier les corrections</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>Fiction: €31-€35/heure, €.02-€.03/mot</li>
                                        <li>Non fiction: €36-€40/heure, €.02-€.03/mot</li>
                                        <li>Business/Sales: €41-€45/heure, €.04-€.05/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Vérification d'Information</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Vérifier la validité de l'information</li>
                                    <li>Examen approfondi des faits</li>
                                    <li>Idéal pour le journalisme et l'écriture historique (littéraire ou non romanesque)</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€46-€50/heure</li>
                                        <li>€.05-€.06/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Transcription</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Conversion d'audio en version écrite</li>
                                    <li>Interviews, discours, meetings, dictées, etc.</li>
                                    <li>Vérification de grammaire, orthographe et exactitude de phrase</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€36-€40/heure</li>
                                        <li>€.09-€.10/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Traduction</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Traduction de/en anglais, arabe, français, provençal et espagnol</li>
                                    <li>Entretien de la signification de l'originel</li>
                                    <li>Cohérence du ton, message et style du texte</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>€46-€50/heure</li>
                                        <li>€.11-€.15/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Écriture/Prête-Plume</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                <ul>
                                    <li>Production de toute sorte de texte (histoires courtes, reportage, livres de fiction ou non romanesque, exposés, etc.)</li>
                                    <li>Création d'un nouveau texte ou reprise</li>
                                    <li>Prête-plume</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                                    <ul>
                                        <li>Fiction: €51-€60/heure, €.09-€.10/mot</li>
                                        <li>Général: €61-€70/heure, €.11-€.15/mot</li>
                                        <li>Commerce: €61-€70/heure, €.16-€.20/mot</li>
                                        <li>Journalisme: €51-€60/heure, €.31-€.50/mot</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    )
};

export default TransRates;