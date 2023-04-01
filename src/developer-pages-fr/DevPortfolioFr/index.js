import React from 'react';
import './style.css';
import bevImage from '../../images/my-bev-express-screenshot.webp';
import projectOne from '../../images/courier-app.webp';
import projectTwo from '../../images/fortnite-app-screenshot.webp';
import projectThree from '../../images/beverage-express.webp';
import Collapsible from 'react-collapsible';
import bevLogo from '../../images/bev-logo.webp';
import chezNicolasLogo from '../../images/chez-nicolas-logo.webp';
import chezNicolasImage from '../../images/chez-nicolas-screenshot.webp';
import letsDoughLogo from '../../images/lets-dough-logo.webp';
import letsDoughImage from '../../images/lets-dough-screenshot.webp';

function DevPortfolioFr() {
    return (
        <div className='portfolio-div'>

        <h2 className="portfolio-title" lang='fr'>Projets des clients</h2>
        <div className='sites-div'>
        
            <div className='site'>
                <h3 className='site-title'>Beverage Express</h3>
                <h4 className='site-locale' lang='fr'>Magasin de bière aux EU</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://www.mybevexp.com/' target='_blank'>mybevexp.com</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://github.com/cmckee120993/react-my-bev' target='_blank'>Github</a></h4>
                            
                <img
                    src={bevLogo}
                    alt='Logo designed by Clay for Beverage Express'
                    className='logo-img'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            Ce site web est un projet continu pour l'entreprise Beverage Express. J'ai commencé quand j'étais en train d'étudier pour
                            mon certificat à l'Université de Californie à Los Angeles, mais depuis, je travaille pour le magasin en tant que travailleur
                            indépendant. Le site actuel inclut l'inventaire du magasin accessible par une recherche (<a rel='noreferrer' className='site-link' href='https://www.mybevexp.com/search' target='_blank'>
                            "Search"</a>) qui utilise une API de Mpower Beverage. La page <a rel='noreferrer' className='site-link' href="https://www.mybevexp.com/seasonal" target="_blank">What's On Tap?"</a> utilise
                            également une API du réseau social Untappd. Les deux pages actualise automatiquement quand quelqu'un au magasin met à jour de l'information dans 
                            la base de données ou le réseau social. Le site a un menu déroulant, un design réactif, une page de contact, le référencement (SEO) et une connectivité avec
                            les réseaux sociaux. J'ai crée le site avec JavaScript, HTML, CSS et React. Le magasin m'a aussi employé pour la création d'un logo, 
                            une  campagne de publicité sur les réseaux sociaux, la création et l'entretien d'une liste de diffusion électronique et l'entretien d'une page de Google Business.
                        </p>
                        <img
                            src={bevImage}
                            alt='Beverage Express website home page.'
                            className='site-image'
                        />
                        <p className='site-description' lang='fr'>
                            Je continue à développer le site pour mettre en œuvre une base de données MongoDB et un serveur Apollo pour que le magasin
                            puisse commencer à prendre des commandes de livraison ou de "pick-up". J'utilise ce que je commencais pendant mes études pour
                            améliorer ce site de MERN (MongoDB, Express.js, React, Node.js) avec des nouveaux compétences. Les clients pourront créer un compte, 
                            avoir l'authorization d'ajouter des produits au panier et pour commander le livraison/pick-up. Les employés en tant qu'administrateur 
                            sur le site suivron la commande jusqu'à sa fin et ils changeront le statut de la commande de "Demandée" à "Livrée". Les clients peuvent
                            changer leurs coordonnés et regarder leurs commandes, et l'administrateur aura la capacité de voir toutes les commandes (livrées et/ou demandées).
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
                <h3 className='site-title'>Chez Nicolas</h3>
                <h4 className='site-locale' lang='fr'>Coiffeur à Nice en France</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://www.cheznicolas.com/' target='_blank'>cheznicolas.com</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://github.com/cmckee120993/chez-nicolas' target='_blank'>Github</a></h4>
                <img
                    src={chezNicolasLogo}
                    alt='Logo designed by Clay for Chez Nicolas'
                    className='logo-img'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            Ce site était pour un client qui voulait commencer son propre salon en tant que travailleur indépendent. Il n'a pas de
                            locale, mais il va chez les gens ou il les invite chez-lui, alors un site pour faire de la publicité était important. Le site
                            utilise React, JavaScript, CSS et HTML. Il y a un tableau des services/frais, des images pour montrer son travail et de la 
                            connectivité aux réseaux sociaux et les moyens de contact. En addition, M. Murati m'a employé pour la création de sa page Google
                            Business, le design et l'impression de sa carte de visite et des publicités, des postes sur ses réseaux sociaux, un dessin sur sa page 
                            <a href='www.cheznicolas.com/moi' target='_blank' rel='noreferrer' className='site-link'>
                            À propos de moi</a> et des retouches d'images. Le site es réactif et suit les principe du référencement (SEO).
                        </p>
                        <img
                            src={chezNicolasImage}
                            alt='Chez Nicolas website home page.'
                            className='site-image'
                        />
                        <p className='site-description' lang='fr'>
                            Si le client désire des changements, j'ajouterai une gallerie des photos de son compte Instagram qui actualise automatiquement quand il
                            publie une photo. Puisque Nicolas parle aussi l'anglais, il a mentioné la possibilité de traduire son site, alors, je ferai cela après
                            que son commerce stablise.
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
                <h3 className='site-title'>Let's Dough</h3>
                <h4 className='site-locale' lang='fr'>Cookisserie à Nice en France</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://letsdoughdotcom.wpcomstaging.com/' target='_blank'>letsdough.com</a></h4>
                <img
                    src={letsDoughLogo}
                    alt="Logo for Let's Dough"
                    className='logo-img'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            J'ai pris ce site après qu'un autre développeur a terminé son temps avec Let's Dough. La seule page qu'il a terminé était
                            l'acceuil, alors j'avais besoin de créer l'en-tête/le pied de page, de finaliser des détails sur la une, de lier
                            toute les autres pages sur le site et de styliser les autres pages en suivant les désirs et le style de Let's Dough. 
                            Le site est propulsé par Elementor et Wordpress.
                        </p>
                        <img
                            src={letsDoughImage}
                            alt="Let's Dough website home page."
                            className='site-image'
                        />
                        <p className='site-description' lang='fr'>
                            Ce client est en train d'ouvrir leur locale, alor le site reste dans l'attente d'être publier. J'attends des photos
                            et leur carte des cookies pour terminer la page d'information et de "Cookie News". Après que je termine le design, 
                            j'aiderai Let's Dough à héberger le site et à mettre en place le plug-in Woocommerce. 
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
                <h3 className='site-title'>Static Beverage Express</h3>
                <h4 className='site-locale'>Beer distributor in Carlisle, PA</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://github.com/cmckee120993/beverage-express' target='_blank'>Github Repo</a></h4>
                <img
                    src={projectThree}
                    alt="Logo for Let's Dough"
                    className='logo-img'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            Ce site était une page statique pour donner l'information de base pour Beverage Express pendant que j'ai créé leur site actuel.
                            Le design a suit les désirs de l'entreprise, et le site montre les logos et images dessinés par moi. Il y avait une liste des
                            produits en pressions et des slushies et l'information du magasin (l'addresse, le contact, l'horaire, etc.). Le site était crée
                            avec HTML, CSS et Bootstrap.
                        </p>
                    </Collapsible>
                </div>
            </div>

        </div>
        
        <h2 className="portfolio-title">Mes projets personels</h2>
        <div className='sites-div'>
            
            <div className='site'>
                <h3 className='site-title'>My Bev Express</h3>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://my-bev-express.herokuapp.com/' target='_blank'>
                   Heroku</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://github.com/cmckee120993/my-bev-express-project' target='_blank'>
                    Github</a></h4>
                <img
                    src={bevImage}
                    alt="Beverage Express project screenshot"
                    className='site-image'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            "My Bev Express" est une application de MERN pour mon client Beverage Express aux États Unis. Les utilisateurs peuvent
                            créer des comptes, se connecter, chercher l'inventaire du magasin, ajouter des produits au panier et puis commander 
                            une livraison. Le panier utilise le "global state" d'un serveur Apollo, et les livraisons et les comptes utilise une 
                            base de données de MongoDB que j'ai crée. Une API de mPower Beverage donne accès à l'inventaire. Les compétence présentées:
                            <ul>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>React</li>
                                <li>Node</li>
                                <li>CSS/Flexbox</li>
                                <li>Graphql</li>
                                <li>API</li>
                                <li>FreeForm Contact Forms</li>
                            </ul>
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
                <h3 className='site-title'>Courier App</h3>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://courier-share.herokuapp.com/' target='_blank'>
                    Heroku</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://github.com/joejhansen/courier-app' target='_blank'>
                    Github</a></h4>
                <img
                    src={projectOne}
                    alt="Courier App project screenshot"
                    className='site-image'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            Courier App permet aux écrivains de participer dans des groupes virtuels d'écriture qui les permettent de publier leur
                            écriture aux autres dans le même group. Pour publier un texte, un WYSIWYG aide corriger les fautes de grammaire de d'ortographe.
                            Puis, après que le texte est publié, les autres dans le groupe peuvent publier des commentaires sur le site. Les groupes sont privés,
                            et tout le monde a besoin de créer un compte pour inviter et être invité. Le créateur du group contrôle les invitations et la participation
                            dans le groupes. Il n'y a pas un maximum de groupes dans lequel les utilisateurs peuvent participer. Le site utilise Handlebars et une base de
                            données MYSQL. Le projet était une collaboration avec Joseph Hansen, Katarina Mihaylovich et Inna Sherstnyova. Les compétences présentées:
                            <ul>
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL</li>
                            </ul>
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
                <h3 className='site-title'>Fortnite App</h3>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://swyner97.github.io/fortnite-app/' target='_blank'>
                    Github</a></h4>
                <img
                    src={projectTwo}
                    alt="Fortnite App project screenshot"
                    className='site-image'
                />
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Cliquez pour plus..." triggerWhenOpen="Cliquez pour moins...">
                        <p className='site-description' lang='fr'>
                            Ce site est parfait pour les joueurs du jeu vidéo Fortnite qui aimeraient customiser leur personnage sans avoir besoin de se connecter 
                            au jeu. Le projet utilise stockage web local pour ajouter les affaires désirées à la liste des envies pour plus tard. Au lieu d'avoir 
                            besoin de défiler tout le catalogue, les utilisateurs du site peuvent chercher pour un objet même si l'objet n'est pas disponible sur 
                            le marché de Fortnight du jour. Le projet était une collaboration avec Sarah Wyner and Andre Silva. Les compétences présentées:
                            <ul>
                                <li>HTML</li>
                                <li>CSS/Bulma</li>
                                <li>JavaScript/Jquery</li>
                                <li>APIs</li>
                            </ul>
                        </p>
                    </Collapsible>
                </div>
            </div>

        </div>
    </div>
    )
};

export default DevPortfolioFr;