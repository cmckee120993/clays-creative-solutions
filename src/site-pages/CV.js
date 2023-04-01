import React from 'react';
import Collapsible from 'react-collapsible';
import '../styles/resume.css';

import graduation from '../images/graduation.webp';
import prof from '../images/professional-photo.webp';
import work from '../images/dissertation-reading.webp';
import abroad from '../images/study-abroad.webp';
import publication from '../images/publication.webp';
import conference from '../images/conference.webp';
import other from '../images/other.webp';
import skills from '../images/skills.webp';
import peace from '../images/peace-languages.webp';


function Resume() {
    return (
        <div className='resume-content'>
            <h2 className='resume-title'>CV</h2>
            <div className='resume-div'>
                <div className='education'>
                    <img
                        src={graduation}
                        alt="Clayton à sa remise des diplôme à l'Université de l'état de Pennsylvanie"
                        className='resume-img'
                    />
                    <h2 lang='fr'>Éducation</h2>
                    <div className='collapsible-div' lang='fr'>
                        <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                            <div className="education-div">
                                <h4>Université de California à Los Angeles (UCLA)</h4>
                                <h5>Juin à décembre 2022</h5>
                                <h5>Certificat de développement web full stack</h5>
                            </div>
                            <div className='education-div'>
                                    <h4>Université de California à Los Angeles</h4>
                                    <h5>Automne 2018 au présent</h5>
                                    <h5>Doctorant dans la discipline de la littérature comparée</h5>
                                    <h6>Certifications:</h6>
                                        <ul>
                                            <li>Études de l'urbanité</li>
                                            <li>La pédagogie de l'écriture: Concentration sur les langues</li>
                                        </ul>
                            </div>
                            <div className='education-div'>
                                    <h4>Université de l'état de Pennsylvanie (PSU)</h4>
                            
                                            <h5>Été 2012 au printemps 2017</h5>
                                            <h5>Masters: Littérature comparée</h5>
                                            <h5>Licenses:</h5>
                                                <ul>
                                                    <li>Littérature comparée</li>
                                                    <li>Français</li>
                                                    <li>Espagnol</li>
                                                </ul>
                                            <h5>Matière secondaire: Arabe</h5>
                            </div>
                            <div className='education-div'>
                                    <h4 className="top-item">Plus d'éducation:</h4>
                                            <h5>Middlebury College Institut d'été des langues, Arabe (2020)</h5>
                                            <h5>Université de Concordia, Traduction et la ville (2019)</h5>
                                            <h5>Université de Houston-Victoria, Certificat de traduction littéraire (2017)</h5>
                            </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='Awards'>
                    <img 
                        src={prof}
                        alt='Un portrait professionel de Clayton'
                        className='resume-img'
                    />
                    <h2>Distinctions</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                                <div className="awards-div">
                                    
                                    <ul className="awards">
                                        <li>Coordinateur d'enseignants — 2021-2022</li>
                                        <li>Urban Humanities Initiative, Bourse d'été — 2020</li>
                                        <li>UCLA Programme de tutorat pour le recherche — 2019</li>
                                        <li>Université de Concordia Bourse d'été — 2019</li>
                                        <li>PSU Département de littérature comparée, Maréchal des étudiants — 2017</li>
                                        <li>PSU Département des études Francophones, Prix pour le meilleur article — 2017</li>
                                        <li>Paterno Fellows Program — 2012-2017</li>
                                        <li>PSU Savant d'honneur Schreyer — 2012-2017</li>
                                        <li>PSU STARTALK Arabe, Bourse d'été — 2012</li>
                                    </ul>
                                </div>
                            </Collapsible>
                        </div>
                </div>
                <div className='work'>
                    <img 
                        src={work}
                        alt='Un petit déj travaillant avec un livre et du café'
                        className='resume-img'
                    />
                    <h2>Expérience</h2>
                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Enseignement...' triggerWhenOpen='Moins'>
                            
                            <div className='experience-div'>
                                <h3>Prof à domicile et des groups</h3>
                                <h4>Acadomia à Nice en France</h4>
                                <h4>Décembre 2022 à juin 2023</h4>
                                <p>
                                    J'ai travaillé en tant que travailleur indépendent à domicile. J'ai aidé avec les 
                                    devoirs, suivi le curriculum des écoles, développé le niveau de la lange de mes élèves et
                                    individualisé les leçons. J'ai donné des cours d'espagnol et d'anglais. En addition, j'ai 
                                    enseigné des cours collectifs qui ont suivi le système d'enseignment Cambridge pour préparer
                                    les élèves de passer l'examen Cambridge pour certifier leur niveau (A1, A2, B1, B2, etc.)
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Coordinateur d'enseignants</h3>
                                <h4>Université de California à Los Angeles</h4>
                                <h4>Printemps 2022</h4>
                                <p>
                                    J'ai enseigné un cours aux étudiants des études supérieurs sur la pedagogie de la littérature et
                                    l'écriture. En plus, on a étudié les règles de l'université, les tendences actuelles de la pedagogie
                                    et tout ce qu'il faut pour diriger un cours. Avant le début du cours, j'ai assisté des entrainements
                                    et j'ai complété une certification de pedagogie.
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Enseignant</h3>
                                <h4>Université de California à Los Angeles</h4>
                                <h4>Septembre 2019 à septembre 2022</h4>
                                <h5>Mes cours</h5>
                                <p>
                                    J'ai écrit le programme, choisi le thème et crée le site selon mes recherches et mes intérêts. Il y avait un peu près 20 étudiants 
                                    dans chaque cours. Les cours étaient divisés en deux: une parte sur l'analyse littéraire et l'autre sur l'écriture académique. Les
                                    devoirs consistaient d'un article de 5 à 6 pages. Deux de ces articles d'une analyse détaillé ou "close reading" étaient 
                                    basés sur des sujets de rédaction; l'article final pouvait être un autre article académique ou un projet qui a employé un des 
                                    thèmes du cours et qui inclut la littérature. 
                                </p>
                                    <Collapsible className='additional-info' trigger='Mes cours +' triggerWhenOpen='Fermez'>
                                        <div className='class-list'>
                                            <div className='one-class'>
                                                <h5>Scandinavian 50W, Été 2022</h5>
                                                <p>Thème: La littérature d'horreur et le noir dans la Littérature contemporaine scandinave basé sur les mythes et les folklores</p>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 4DW, Été 2022</h5>
                                                <p>Thème: La littérature contemporaine des images (romans graphiques, dessins animés, art de la rue, etc.)</p>
                                            </div>

                                            <div className='one-class'>
                                            <h5>Comp Lit 4DW, Été 2021</h5>
                                                <p>Thème: Les droits humains dans la littérature contemporaine</p>
                                            </div>
                                        </div>  
                                    </Collapsible>

                                <h5>Travaux dirigés (Parties des CM)</h5>
                                <p>
                                    J'avais un groupe de 20 étudiants qui ont participé également dans un cours magistral avec 5 autres groupes (100 étudiants ensembles).
                                    J'ai assisté les CM avec mes élèves pour écouter le professeur d'université principal, et puis j'ai enseigné plus
                                    profondément et individuellement à mes étudiants l'analyse littéraire et l'écriture academique. Les cours avaient des thèmes
                                    différents selon le désir du prof principal, et la littérature était de partout dans le monde. L'écriture a consisté de trois articles
                                    (20 pages en entier) et la reprise d'un des articles. Tous les articles avaient des sujets de rédaction. J'ai crée des leçons, 
                                    dirigé mes 20 étudiants et j'ai noté tous les devoirs. Tous les enseignants des TD ont réuni avec les profs principaux chaque semaine.
                                </p>
                                    <Collapsible className='additional-info' trigger='Les TD +' triggerWhenOpen='Fermez'>
                                        <div className='class-list'>
                                            <div className='one-class'>
                                                <h5>Comp Lit 2DW, Automne 2020</h5>
                                                <h6>Professeur Principal: Dr. Stephanie Bosch Santana</h6>
                                                <h6>Thème: Les écrivains noirs dans la littérature contemporaine</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 2CW, Hiver 2021</h5>
                                                <h6>Professeur Principal: Dr. Tamara Levitz</h6>
                                                <h6>Thème: La race dans la littérature depuis les Lumières</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 2CW, Printemps 2021</h5>
                                                <h6>Professeur Principal: Dr. Lisa Felipe</h6>
                                                <h6>Thème: La folie dans la littérature depuis les Lumières</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 2DW, Printemps 2021</h5>
                                                <h6>Professeur Principal: Dr. Aamir Mufti</h6>
                                                <h6>Thème: L'immigration dans la littérature contemporaine</h6>
                                            </div>
                                        </div>
                                    </Collapsible>

                                <h5>Cours de français</h5>
                                <p>
                                    J'ai enseigné des cours de français aux débutants. On a travaillé la prononciation, le grammaire et 
                                    l'orthographe. En addition, les étudiants ont exploré la diversité du monde francophone, les cultures 
                                    et les coutumes qui existent en Europe, Afrique et Amérique du nord.
                                </p>
                                    <Collapsible className='additional-info' trigger='Les cours +' triggerWhenOpen='Fermez'>
                                        <div className='class-list'>
                                            <div className='one-class'>
                                                <h5>Fraçais 3: Cours final des débutants, Automne 2019 et Hiver 2020</h5>
                                            </div>

                                            <div className='one-class' id="last-class">
                                                <h5>Français 1: Premier cours des débutants, Printemps 2020</h5>
                                            </div>
                                        </div>
                                    </Collapsible>
                            </div>

                            <div className='experience-div'>
                                <h3>Spécialiste de la fonction exécutive</h3>
                                <h4>Fusion Academy South Bay</h4>
                                <h4>Août 2021 à juin 2022</h4>
                                <p>
                                    J'ai évalué les capacités cognitives des collégiens et lycéens pour communiquer des stratégies
                                    avec leur professeurs. J'ai utilisé un examen qui s'appelle "Mindprint". J'ai conducté de la 
                                    recherche sur le rôle de cognition et les capacités cognitives dans le domaine de l'éducation pour
                                    dirigé des ateliers pour les professeurs et l'administration à l'école.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Professeur/Mentor: Anglais, Français et Espagnol</h3>
                                <h4>Fusion Academy South Bay</h4>
                                <h4>Janvier 2021 à juin 2022</h4>
                                <p>
                                    J'ai enseigné l'anglais (grammaire et littérature), français et espagnol (langue et cultures) 
                                    aux collégiens et lycéens. Le système à Fusion suit une éducation individualisée Entrez
                                    un prof et un élève au même temps. J'ai crée chaque cours pour conformer aux désirs, intérêts
                                    et capacités de chaque élève.
                                </p>
                            </div>    


                            <div className='experience-div'>
                                <h3>Attaché temporaire d'enseignement pour l'arabe</h3>
                                <h4>Penn State STARTALK</h4>
                                <h4>Été 2021</h4>
                                <p>
                                    J'ai suivi deux semaines de formations sur la pedagogie des langues (concentré sur l'arabe). Après,
                                    les profs qui ont participé dans cette formations ont enseigné un cours d'arabe en utilisant les 
                                    connaisances acquises à travers les deux semaines.
                                </p>
                            </div>   

                            <div className='experience-div'>
                                <h3>Assistant de langue</h3>
                                <h4>Teaching Assistant Program in France (TAPIF)</h4>
                                <h4>Octobre 2017 à mai 2018</h4>
                                <p>
                                    J'étais un assistant de lange à Bollène en France. J'ai divisé mon temps entre deux collèges et
                                    un lycée. J'ai dirigé des petits groups, présenté sur ma culture/langue et j'ai aidé les profs
                                    dans leurs cours et leurs clubs de langue.
                                </p>
                            </div>    
                            
                            <div className='experience-div'>
                                <h3>Assistant de la langue arabe</h3>
                                <h4>Penn State STARTALK</h4>
                                <h4>Été 2017</h4>
                                <p>
                                    J'ai aidé les instructeurs principaux dans le cours, préparé des présentations et les devoirs,
                                    trouvé les matériels authentiques et travaillé avec les étudiants. J'ai également facilité des 
                                    échanges entre les personnes de langue arabe maternelle et nos étudiants et organisé des activités 
                                    culturelles. 
                                </p>
                            </div>
                            
                            <div className='experience-div'>
                                <h3>Assistant de Professeur Principal</h3>
                                <h4>The Pennsylvania State University</h4>
                                <h4>Automne 2015 au printemps 2017</h4>
                                <p>
                                    J'ai noté les devoirs des étudiants, dirigé les aspects techniques (le site du cours, la technologies, etc.) et
                                    communiqué avec les étudiants. J'avais des heures de permanences et enseigné des cours quand les profs étaient absents. 
                                </p>
                                    <Collapsible className='additional-info' trigger='Les cours +' triggerWhenOpen='Fermez'>
                                        <div className='class-list'>
                                            
                                            <div className='one-class'>
                                                <h5>Littérature comparée: Les droits humains et la littérature du monde, Printemps 2017</h5>
                                                <h6>Professeur Principal: Dr. Rose Jolly</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Les études globales: Chemins globals et la connectivité, Printemps 2016</h5>
                                                <h6>Professeur Principal: Dr. Eric Hayot</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Littérature comparée: La littérature et le film international, Automne 2015</h5>
                                                <h6>Professeur Principal: Dr. Henry Morello</h6>
                                            </div>

                                        </div>  
                                    </Collapsible> 
                            </div>
                        </Collapsible>
                    </div>

                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Autre expérience...' triggerWhenOpen='Fermez'>
                            <div className="experience-div">
                                <h3>Freelance Web Marketer</h3>
                                <h4>Décembre 2022 au présent</h4>
                                <p>
                                    Je travaille en tant qu'indépendent pour toutes choses web! Je dessine, crée et fais le codage des
                                    sites web pour toutes sortes des clients. En addition, je travaille sur les campagnes de publicité, 
                                    l'image d'entreprise, la photographie, les cartes de visites, les logos, les réseaux sociaux, les articles
                                    et plus! Pour tous les détails, regardez <a className='resume-link' href='/fr/development'>Web Development Pages</a> or my Writing and Translation Pages
                                   Work as an independent contractor for all things web! I design, create, and code websites
                                   for businesses and clients of all kinds. In addition to web design, I also work on marketing
                                   campaigns, company image, photography, business cards, logo design, social media posts, articles,
                                   or any desired created content in print or digital format. For full details, feel free to look at
                                   my <a className='resume-link' href='/fr/development'>Sites et Webmarketing</a> ou <a className='resume-link' 
                                   href='/fr/translation'>Traduction et Révision</a>.
                                </p>

                                <Collapsible className='additional-info' trigger='List of Clients +' triggerWhenOpen='Fermez'>
                                        <div className='class-list'>
                                            
                                            <div className='one-class'>
                                                <h5><a className='resume-link' href='https://letsdoughdotcom.wpcomstaging.com/'>Let's Dough</a></h5>
                                                <h6>Cookisserie à Nice en France</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5><a className='resume-link' href='www.cheznicolas.com'>Chez Nicolas</a></h5>
                                                <h6>Coiffeur à Nice en France</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5><a className='resume-link' href='www.mybevexp.com'>Beverage Express</a></h5>
                                                <h6>Magasin du bière à Carlisle en Pennsylvanie aux EU</h6>
                                            </div>
                                        </div>  
                                </Collapsible> 
                            </div>

                            <div className="experience-div">
                                <h3>Rédacteur</h3>
                                <h4>Trafika Europe</h4>
                                <h4>Juin 2020 au présent</h4>
                                <p>
                                    Je suis responsable pour la publication (les droits de publier, la mise en forme/page, le design
                                    la rédaction, les photos, etc.) de la revue. Je dirige des stagières sur leurs devoirs pour la revue
                                    et pour les diffusions de radio. J'enregistre des interviews avec des écrivains pour le radio.
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Coodinateur de communication</h3>
                                <h4>Trafika Europe</h4>
                                <h4>Septembre 2015 à juin 2020</h4>
                                <p>
                                    J'ai cherché pour les nouveautés de la littérature européene pour notre revue et j'ai
                                    aidé avec les contrats, la solicitation des traducteurs, les traductions et l'entretien de
                                    la librairie. J'ai fait de la recherche pour la revue, le radio et un calendrier des festivals 
                                    des livres en Europe. 
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Relecteur-correcteur</h3>
                                <h4>Asymptote</h4>
                                <h4>Juin 2018 à avril 2020</h4>
                                <p>
                                    J'ai relu les extrait de littérature pour corriger des fautes et pour sugérer des changements
                                    de langue/style. La revue a publié toute sorte des textes (fiction, nonromanesque, interview, etc.).
                                    J'ai travaillé en équipe pour publier de la littérature de qualité avec des dates limites strictes. 
                                    J'ai aussi aidé avec le curriculum d'éducation, fait la publicité de la revue et écrit pour le blog.
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Relecteur-correcteur</h3>
                                <h4>Dalkey Archive Press</h4>
                                <h4>Janvier 2019 à janvier 2020</h4>
                                <p>
                                J'ai relu des livrespour corriger des fautes et pour sugérer des changements
                                de langue/style.
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Assistant de recherce</h3>
                                <h4>Université de l'état de Pennsylvanie, Caroline Eckhardt</h4>
                                <h4>Automne 2016</h4>
                                <p>
                                    J'ai aidé le projet de recherche de Dr. Eckhardt sur la grande famine de l'Europe du nord 
                                    au 14ième siècle.
                                </p>
                            </div>
                            
                        </Collapsible>
                    </div>
                </div>
                <div className='study-abroad'>
                <img 
                        src={abroad}
                        alt='Clay au Fort St. Nicolas à Marseille en France'
                        className='resume-img'
                    />
                    <h2>Study Abroad</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                                <div className="abroad-div">
                                    <h3>Ronda en Espagne</h3>
                                    <h4>Été 2015</h4>
                                    <p>
                                        Ce séjour au sud de l'Espagne était dirigé par des profs de l'Université de l'état de Pennsylvanie.
                                        J'ai étudié l'histoire d'Espagne, la grammaire, la culture, et la littérature contemporaine. Tous les
                                        cours étaient enseignés par un prof espagnol. Il y avait des voyages scolaires chaque weekend autour de 
                                        l'Espagne.
                                    </p>
                                </div>

                                <div className="abroad-div">
                                    <h3>Paris en France</h3>
                                    <h4>Printemps 2015</h4>
                                    <p>
                                        J'ai concentré mes études sur la littérature, y compris un cours à Paris IV sur l'histoire littéraire
                                        du 19ième siècle. J'ai habité avec une famille d'acceuil à Belleville (le 12ième). 
                                    </p>
                                </div>

                                <div className="abroad-div">
                                    <h3>Voyage d'étude en Egypte</h3>
                                    <h4>Été 2013</h4>
                                    <p>
                                        Ce voyage était organisé par des professeurs à l'Université de l'état de Pennsylvanie. On est allé
                                        aux villes principales (Caire, Luxour, Alexandrie, etc.) pour étudié l'histoire ancienne. J'ai complété
                                        un cours de recherche indépendent qui a inclus un discours sur le Sphinxe.
                                    </p>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='languages'>
                    <img 
                        src={peace}
                        alt='Signe de paix avec les mot pour paix en anglais, arabe, français et espagnol.'
                        className='resume-img'
                    />
                    <h2>Langues</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                                <div className="language-div">
                                    <ul>
                                        <li><strong>Anglais: </strong>langue maternelle</li>
                                        <li><strong>Français: </strong>niveau élevé d'écriture, lecture et parler</li>
                                        <li><strong>Espagnol: </strong>niveau élevé d'écriture, lecture et parler</li>
                                        <li><strong>Arabe: </strong>niveau intermédiare de parler, niveau élevé d'écriture et lecture</li>
                                        <li><strong>Provençal: </strong>niveau intermédiare de parler, niveau élevé d'écriture et lecture</li>
                                    </ul>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='publications'>
                    <img 
                        src={publication}
                        alt='Ma traduction de La disparition de Jim Sullivan écrit par Tanguy Viel'
                        className='resume-img'
                    />
                    <h2>Publications</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                                <div className="publications-div">
                                    <h3>Academique</h3>
                                        <div className="publication-div">
                                            <h4>“The Self(’s)-Translation of Sexuality and Gender as a Raised Bascule in Hanan al-Shaykh’s Inaha London ya ‘zizi”</h4>
                                            <h5>Chapitre dans <a className='resume-link' href='https://www.routledge.com/Translation-and-the-Global-City-Bridges-and-Gateways/Woodsworth/p/book/9780367555689?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf4hvQiCKFtgNI2scyx0_YgqJVM6eD5uiim9pC70rFDpj6TDVX1Oy1hoChVgQAvD_BwE'><em>Trainslation and the Global City</em></a></h5>
                                            <h5>Juin 2021</h5>
                                        </div>

                                        <div className="publication-div">
                                            <h4>“Translation and Audience: Edgar Allen Poe’s “The Gold-Bug”</h4>
                                            <h5>Article dans <a className='resume-link' href='http://www.journals.aiac.org.au/index.php/IJCLTS/issue/view/167'><em>The International Journal of Comparative Literature and Translation Studies
                                                        Volume 5, No. 4 (2017)</em></a></h5>
                                            <h5>2017</h5>
                                        </div>

                                    <h3>Critiques</h3>
                                        <div className="publication-div">
                                            <h4>Critique de  <em>A Surgery of a Star</em> de Margarita Serafimova</h4>
                                            <h5><a className='resume-link' href='https://www.worldliteraturetoday.org/2021/autumn/surgery-star-margarita-serafimova'>World Literature Today, Autumn 2021</a></h5>
                                            <h5>2021</h5>
                                        </div> 

                                        <div className="publication-div">
                                            <h4>Rawness and Taboo: Kono Taeko’s <em>Toddler Hunting and Other Stories</em> in Review</h4>
                                            <h5><a className='resume-link' href='https://www.asymptotejournal.com/blog/2019/03/07/____-kono-taekos-toddler-hunting-and-other-stories-in-review/'>Asymptote Blog</a></h5>
                                            <h5>2019</h5>
                                        </div> 

                                        <div className="publication-div">
                                            <h4>What’s New in Translation: Janvier 2019 —<em>The Death of Murat Idrissi</em></h4>
                                            <h5><a className='resume-link' href='https://www.asymptotejournal.com/blog/2019/01/07/whats-new-in-translation-Janvier-2019/ '>Asymptote Blog</a></h5>
                                            <h5>2019</h5>
                                        </div>

                                        <div className="publication-div">
                                            <h4>Le rouge et le noir: <em>Marrakech Noir</em> In Review</h4>
                                            <h5><a className='resume-link' href='https://www.asymptotejournal.com/blog/2018/12/10/le-rouge-et-le-noir-marrakech-noir-in-review/'>Asymptote Blog</a></h5>
                                            <h5>2018</h5>
                                        </div>

                                    <h3>Traductions</h3>

                                    <div className="publication-div">
                                            <h4>Juan Udaondo Alegre ““Et esto dixto el grant Hermes en uno de sos castigos”: Uncovering the “Arabic Hermes” in Castilian Wisdom Literature”</h4>
                                            <h5>De l'espagnol à l'anglais</h5>
                                            <h5>A venir (traduit en septembre 2022)</h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Tanguy Viel, <em>La disparition de Jim Sullivan</em> (<em>The Disappearance of Jim Sullivan</em>)</h4>
                                            <h5>Du français à l'anglais</h5>
                                            <h5>Un roman publié par Dalkey Archive Press en juin 2021</h5>
                                            <h5><a className='resume-link' href='https://dalkeyarchive.store/products/the-disappearance-of-jim-sullivan?_pos=1&_psq=jim%20sulli&_ss=e&_v=1.0'>Link to Purchase from Dalkey Archive</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Jean Teulé, <em>Entrez dans la danse</em> (<em>Join the Dance</em>)</h4>
                                            <h5>Du français à l'anglais</h5>
                                            <h5>Extrait publié par Trafika Europe en avril 2020</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/TE17-Mysterious-Montenegro'>Link to Excerpt Publication</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Martine Morillon-Carreau, Des poèmes de <em>Poéclats</em> et <em>Pierres d'attente</em></h4>
                                            <h5>Du français à l'anglais</h5>
                                            <h5>Treize poèmes publiés par Trafika Europe en septembre 2017</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/Trafika-Europe-11-Swiss-Delights1'>Link to Excerpt Publication</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Charles Pépin, <em>La Joie</em> (<em>Joy</em>)</h4>
                                            <h5>Du français à l'anglais</h5>
                                            <h5>Extrait publié par Trafika Europe en mars 2016</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/Trafika-Europe-7-Ukrainian-Prayer'>Link to Excerpt Publication</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Tahar Ben Jelloun, <em>L'Ablation</em> (<em>Ablation</em>)</h4>
                                            <h5>Du français à l'anglais</h5>
                                            <h5>Extrait publié par Trafika Europe en décembre 2015</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/Trafika-Europe-6-Arabesque'>Link to Excerpt Publication</a></h5>
                                    </div>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='conferences'>
                    <img 
                        src={conference}
                        alt='Un journal sur ma présentation à La Vihado, une conference en et sur le provençal.'
                        className='resume-img'
                    />
                    <h2>Conférences</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                                <div className="conference-div">
                                    <h3>Excellence in Pedagogy and Innovative Classrooms</h3>
                                    <h4>Création d'un cours des langues modernes</h4>
                                    <h4>Mai 2022</h4>
                                    <p>
                                        J'ai pris partie d'une discussion qui s'appellait "Une réexamination de l'écriture dans les
                                        cours de langue" avec trois autres personnes. On a discuté l'importance des matériels authentiques,
                                        l'utilisation des vrais situations au lieu de dialogues dans les manuels et l'échafaudage des principes.
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>Association canadienne de traductologie</h3>
                                    <h4>Traductions, Traducteurs, Interprètes et Subversion</h4>
                                    <h4>Juin 2021</h4>
                                    <p>
                                        J'ai présenté un article avec le titre “Sexual Subversion in Latin American Literature: Translating 
                                        Manuel Puig and Reinaldo Arenas”, ce qui investigue les implications éthique et politique qui se passe 
                                        dans la traduction de l'identité "loca" vers l'anglais pendant le Boom latino-américain.
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>UCLA QGrad</h3>
                                    <h4>Queering Love: Subjectivities, temporalities et imaginaires décolonials</h4>
                                    <h4>Janvier 2020</h4>
                                    <p>
                                        J'ai présenté un article avec le titre “مثليّ (mithlī), Not  مثلي (mithli):  Self-Translation for 
                                        Queer Love in Hanan al-Shaykh’s انها لندن يا عزيز (Only in London, trans. Catherine 
                                        Cobham)” pour explorer les effets de la sexuality et le genre en Occident sur les langues et les cultures
                                        non-Occidentales. Je montre comment le roman souligne la rupture qui se passe quand un discours a trop 
                                        de force dans la création et l'intérpretation des identités. 
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>UCLA European Languages and Transcultural Studies Conference</h3>
                                    <h4>Porosité et reciprocité</h4>
                                    <h4>Octobre 2019</h4>
                                    <p>
                                        J'ai présenté un article avec le titre “Diverse Identities in National Homogeneity: Being prouvençau 
                                        amongst lis franchimand”. L'article a exposé comment les personne du sud de la France s'engagent dans 
                                        l'activisme culturel pour entretenir l'utilisation de la lange provençale. J'examine cet activisme 
                                        avec une comparaison du Rapport sur la restitution du patrimoine culturel africain de Sarr et Savoy et
                                        l'héritage colonial. 
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>La Vihado</h3>
                                    <h4>Parlaren à Bouleno</h4>
                                    <h4>Mars 2018</h4>
                                    <p>
                                        J'ai présenté en langue provençale pendant cette conférence qui a célébré la langue et la culture
                                        de la Provence. Ma présentation était sur la littérature de Mistral et comment la culture en Provence
                                        continue à travers ses œuvres. 
                                    </p>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='other'>
                    <img
                        src={other}
                        alt='Clay on a solo hike in Grand Tetons National Park in Wyoming'
                        className='resume-img'
                    />
                    <h2>Activities</h2>
                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                            
                            <div className='experience-div'>
                                <h3>Association des étudiants des études supérieurs de la littérature comparée</h3>
                                <h4>Université de California à Los Angeles</h4>
                                <h4>Janvier 2020 à septembre 2021</h4>
                                <p>
                                    J'étais un liaison entre les étudiants et les professeurs du Département de la littérature comparée. En equipe de trois, 
                                    on a essaié de créer des changements dans le Départment et d'améliorer les relations entre tout le monde. On a oragnisé des
                                    événements et des ateliers d'écriture pendant l'année scolaire.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Liaison départmental du Syndicat</h3>
                                <h4>UAW 2865 UCLA</h4>
                                <h4>Juin 2019 à juin 2021</h4>
                                <p>
                                    J'étais un liaison entre le syndicat des étudiants des études supérieurs et les enseignants dans mon Département. J'ai informé
                                    les enseignants des contrat, les droits des travailleurs, des plaints sur les injustices et des changements du syndicat.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Instructeur des cours de nationalité</h3>
                                <h4>International Rescue Commission</h4>
                                <h4>Août 2019 à mars 2020</h4>
                                <p>
                                    J'ai enseigné l'information sur le processus pour devenir un citoyen américain aux immigrants dans la communauté de Los Angeles.
                                    J'ai traduis quand il était nécéssaire et possible pour faciliter la compréhension de mes participants. On a étudié l'histoire et
                                    la culture américaine et l'anglais en tant que langue séconde. 
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Organizeur</h3>
                                <h4>UCLA Groupe de lecture de la littérature comparée</h4>
                                <h4>Printemps 2019</h4>
                                <p>
                                    J'ai crée ce group pour célébrer le 50ième anniversaire du Département de la littérature comparée à l'Université de 
                                    Californie à Los Angeles. On a exploré les articles académiques des anciens étudiants, des étudiants actuels
                                    et des professeurs du département. On a discuté l'évolution du savoir de la littérature comparée et le rôle de notre
                                    université.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Instructeur d'anglais langue étrangère</h3>
                                <h4>Mid-State Literacy Council</h4>
                                <h4>Automne 2016 au printemps 2017</h4>
                                <p>
                                    Je travaillais en tant que bénévole pour enseigner l'anglais langue étrangère aux adultes dans la communauté de
                                    State College en Pennsylvanie. J'avais des cours pour des débutants et pour des intermédiaires, j'ai aidé avec
                                    les demandes de visa et j'ai aidé avec l'intégration des adultes à notre communauté. 
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Trésorier</h3>
                                <h4>The Americanists</h4>
                                <h4>Août 2015 à juin 2017</h4>
                                <p>
                                    Cette organisation a concentré sur la littérature et les films de la péninsule Ibérique et 
                                    l'Amérique centrale et du Sud pour étudier les influences trans-Atlantique. On a organisé des soirées
                                    de film chaque mois et des conférenciers invités chaque semestre.
                                </p>
                            </div>

                        </Collapsible>
                    </div>
                </div>
                <div className='skills'>
                    <img 
                        src={skills}
                        alt="Une capture d'écran de VS Code, Microsoft Word, and Adobe Photoshop qui était utilisés pour créer ce site"
                        className='resume-img'
                    />
                    <h2>Compétences</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Cliquez pour plus!' triggerWhenOpen='Fermez'>
                                <div className="skills-div">
                                    <div>
                                    <ul>
                                        <li>Les logiciels Adobe:</li>
                                            <ul>
                                                <li>Acrobat</li>
                                                <li>DreamWeaver</li>
                                                <li>Fresco</li>
                                                <li>Illustrator</li>
                                                <li>InDesign</li>
                                                <li>Media Encoder</li>
                                                <li>Photoshop</li>
                                                <li>Premiere</li>
                                            </ul>
                                        <li>Audicity</li>
                                        <li>Les langues/compétences de codage:</li>
                                            <ul>
                                                <li>CSS</li>
                                                <li>HTML</li>
                                                <li>JavaScript</li>
                                                <li>JQuery</li>
                                                <li>MongoDB</li>
                                                <li>MySQL</li>
                                                <li>NoSQL</li>
                                            </ul>
                                        <li>Git Hub</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <ul>
                                        <li>Go Daddy Hébérgement</li>
                                        <li>Heroku</li>
                                        <li>Les logiciels de Microsoft:</li>
                                            <ul>
                                                <li>Excel</li>
                                                <li>OneDrive</li>
                                                <li>OneNote</li>
                                                <li>Outlook</li>
                                                <li>PowerPoint</li>
                                                <li>Teams</li>
                                                <li>Word</li>
                                            </ul>
                                        <li>Les réseaux sociaux:</li>
                                            <ul>
                                                <li>Facebook</li>
                                                <li>Instagram</li>
                                                <li>Tik Tok</li>
                                                <li>Twitter</li>
                                            </ul>
                                        <li>Wordpress, Wix, and Elementor</li>
                                    </ul>
                                </div>
                            </div>
                            </Collapsible>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Resume;