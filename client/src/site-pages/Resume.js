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
            <h2 className='title'>Résumé</h2>
            <div className='resume-div'>
                <div className='education'>
                    <img
                        src={graduation}
                        alt='Clayton at Penn State Graduation in State College, PA'
                        className='resume-img'
                    />
                    <h2 className='title'>Education</h2>
                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                            <div className="education-div">
                                <h4>University of California, Los Angeles</h4>
                                <h5>June to December 2022</h5>
                                <h5>Certificate Full Stack Web Development</h5>
                            </div>
                            <div className='education-div'>
                                    <h4>University of California, Los Angeles</h4>
                                    <h5>Fall 2018 to Present</h5>
                                    <h5>Doctoral Candidate in the Department of Comparative Literature</h5>
                                    <h6>Certificates:</h6>
                                        <ul>
                                            <li>Urban Humanitites</li>
                                            <li>Writing Pedagogy: Language Learner Emphasis</li>
                                        </ul>
                            </div>
                            <div className='education-div'>
                                    <h4>Penn State University</h4>
                            
                                            <h5>Summer 2012 to Spring 2017</h5>
                                            <h5>MA: Comparative Literature</h5>
                                            <h5>BAs:</h5>
                                                <ul>
                                                    <li>Comparative Literature</li>
                                                    <li>French</li>
                                                    <li>Spanish</li>
                                                </ul>
                                            <h5>Minor: Arabic</h5>
                            </div>
                            <div className='education-div'>
                                    <h4 className="top-item">Additional Education:</h4>
                                            <h5>Middlebury College Summer Language, Arabic (2020)</h5>
                                            <h5>Concordia University, Translation and the City (2019)</h5>
                                            <h5>University of Houston-Victoria, Certificate in Literary Translation (2017)</h5>
                            </div>
                        </Collapsible>
                    </div>
                </div>
                <div className='Awards'>
                    <img 
                        src={prof}
                        alt='Professional headshot of Clay'
                        className='resume-img'
                    />
                    <h2 className='title'>Honors</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                                <div className="awards-div">
                                    
                                    <ul className="awards">
                                        <li>Teaching Assistant Coordinator — 2021-2022</li>
                                        <li>Urban Humanities Initiative Summer Research Grant — 2020</li>
                                        <li>UCLA Graduate Student Research Mentorship Program — 2019</li>
                                        <li>Concordia University International Summer School Scholarship — 2019</li>
                                        <li>Penn State Department of Comparative Literature Student Marshal — 2017</li>
                                        <li>Penn State Department of French and Francophone Studies Best Essay — 2017</li>
                                        <li>Paterno Fellows Program — 2012-2017</li>
                                        <li>Penn State University Schreyer Honors Scholar — 2012-2017</li>
                                        <li>Penn State STARTALK Summer Language Scholarship — 2012</li>
                                    </ul>
                                </div>
                            </Collapsible>
                        </div>
                </div>
                <div className='work'>
                    <img 
                        src={work}
                        alt='Working breakfast for disseration.'
                        className='resume-img'
                    />
                    <h2 className='title'>Experience</h2>
                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Teaching experience...' triggerWhenOpen='Close'>
                            
                            <div className='experience-div'>
                                <h3>Independent Educator</h3>
                                <h4>Acadomia in Nice, France</h4>
                                <h4>December 2022 to June 2023</h4>
                                <p>
                                    Worked as an independent contractor for courses in students' homes. Sessions lasted
                                    of an hour or an hour and a half. They consisted of homework assistance, individual
                                    language instruction, and personalized tutoring. In addition to individual courses in 
                                    English and Spanish, I also led group courses following the Cambridge system of languages 
                                    (A1, A2, B1, B2, etc.) to lead students through the examinations for certification of 
                                    their language ability.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Teaching Assistant Coordinator</h3>
                                <h4>University of California, Los Angeles</h4>
                                <h4>Spring 2022</h4>
                                <p>
                                    Taught Comp Lit 495, a graduate seminar required for all first-year students that provides new 
                                    teachers an introduction to comparative literature and writing pedagogy as well as current 
                                    trends, practices, and guidelines. Attended trainings on how to best teach pedagogical practices 
                                    and strategies.
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Teaching Assistant</h3>
                                <h4>University of California, Los Angeles</h4>
                                <h4>September 2019 to September 2022</h4>
                                <h5>My Created Courses</h5>
                                <p>
                                    Created the course syllabus, theme, and website from my own research/interests. Classes consisted of about 20 students. 
                                    The class consisted of literary analysis and academic humanities writing. Each writing assignment was five- to six-pages
                                    long. Two close reading analyses were required based on prompts; the final assignment could be another academic essay or
                                    a project based on the theme of the class that included the literature in some capacity as well as an academic reflection.
                                </p>
                                    <Collapsible className='additional-info' trigger='List of Classes +' triggerWhenOpen='Close'>
                                        <div className='class-list'>
                                            <div className='one-class'>
                                                <h5>Scandinavian 50W, Summer 2022</h5>
                                                <p>Theme: Creating horror and noir in Contemporary Scandinavian Fiction by using myth and folklore</p>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 4DW, Summer 2022</h5>
                                                <p>Theme: Contemporary graphic literature (graphic novels, animations, street art, etc.)</p>
                                            </div>

                                            <div className='one-class'>
                                            <h5>Comp Lit 4DW, Summer 2021</h5>
                                                <p>Theme: Human rights in Contemporary World Literature</p>
                                            </div>
                                        </div>  
                                    </Collapsible>

                                <h5>Sections of a Lecture</h5>
                                <p>
                                    Led a section of 20 students focusing on literary analysis. Each session consisted of discussion of literature and 
                                    development of academic, critical writing. Courses had different themes based on the lead professor's interests and
                                    included works from a variety of authors, languages, and geographical locations. Writing assignments consisted of three
                                    essays (20 pages in total) and a rewrite of one essay. All writing was based on prompts and included close reading as 
                                    support for an argument. I completed all grading, lesson planning, and course management for my section. All TAs attended
                                    a weekly meeting.
                                </p>
                                    <Collapsible className='additional-info' trigger='List of Classes +' triggerWhenOpen='Close'>
                                        <div className='class-list'>
                                            <div className='one-class'>
                                                <h5>Comp Lit 2DW, Fall 2020</h5>
                                                <h6>Lecturer: Dr. Stephanie Bosch Santana</h6>
                                                <h6>Theme: Black Authors in Contemporary Literature</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 2CW, Winter 2021</h5>
                                                <h6>Lecturer: Dr. Tamara Levitz</h6>
                                                <h6>Theme: Race from Enlightenment to Contemporary Literature</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 2CW, Spring 2021</h5>
                                                <h6>Lecturer: Dr. Lisa Felipe</h6>
                                                <h6>Theme: Folie from Enlightenment to Contemporary Literature</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comp Lit 2DW, Spring 2021</h5>
                                                <h6>Lecturer: Dr. Aamir Mufti</h6>
                                                <h6>Theme: Immigration in Contemporary Literature</h6>
                                            </div>
                                        </div>
                                    </Collapsible>

                                <h5>French Language</h5>
                                <p>
                                    Taught introductory French language courses to beginner students. Worked on pronunciation,
                                    grammar, and overall language comprehension. In addition to the language, students were
                                    also exposed to the diverse Francophone world and the various cultures and customs that
                                    exist in various locations where French is spoken in Europe,
                                    Africa, and North America.
                                </p>
                                    <Collapsible className='additional-info' trigger='List of Classes +' triggerWhenOpen='Close'>
                                        <div className='class-list'>
                                            <div className='one-class'>
                                                <h5>French 3: Beginner French, Fall 2019 and Winter 2020</h5>
                                            </div>

                                            <div className='one-class' id="last-class">
                                                <h5>French 1: Beginner French, Spring 2020</h5>
                                            </div>
                                        </div>
                                    </Collapsible>
                            </div>

                            <div className='experience-div'>
                                <h3>Executive Functioning Specialist</h3>
                                <h4>Fusion Academy South Bay</h4>
                                <h4>August 2021 to June 2022</h4>
                                <p>
                                    Assess middle/high school students’ cognitive abilities and communicate strategies 
                                    with their teaching teams based on the results. Used an assessment tool called 
                                    Mindprint. Researched the role of cognition and cognitive abilities in education 
                                    and pedagogical settings. Led professional development opportunities to train 
                                    teachers and administrators on how to better teach students and encourage skill support.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Teacher/Mentor: English, French, and Spanish</h3>
                                <h4>Fusion Academy South Bay</h4>
                                <h4>January 2021 to June 2022</h4>
                                <p>
                                Taught middle and high schoolers English/Language Arts, French and Spanish language, culture, 
                                and history/literature using Fusion’s one-to-one model. Each course is individualized and 
                                curated for the student’s interests and goals for taking the language. 
                                </p>
                            </div>    


                            <div className='experience-div'>
                                <h3>Adjunct Instructor of Arabic</h3>
                                <h4>Penn State STARTALK</h4>
                                <h4>Summer 2021</h4>
                                <p>
                                Participated in a two-week practicum that focused on language-teaching pedagogy (specifically 
                                related to Arabic). After the course, students were employed by Penn State to teach Arabic 1 
                                to beginning students of the language in a four-week intensive course setting. 
                                </p>
                            </div>   

                            <div className='experience-div'>
                                <h3>English Language Assistant</h3>
                                <h4>Teaching Assistant Program in France</h4>
                                <h4>October 2017 to May 2018</h4>
                                <p>
                                Employed by the French government as a language assistant in Bollène, France. Time was split 
                                between two middle schools and a high school. Led students in small groups, created presentations, 
                                presented on topics ranging from American culture to history to literature, and assisted the 
                                teachers with various classroom tasks.
                                </p>
                            </div>    
                            
                            <div className='experience-div'>
                                <h3>Arabic Teaching Assistant</h3>
                                <h4>Penn State STARTALK</h4>
                                <h4>Summer 2017</h4>
                                <p>
                                Assisted main instructors in the classroom, prepared presentations and assignments with 
                                authentic materials, and worked with students on questions and tutoring. Facilitated 
                                language exchanges between native Arabic speakers and students learning Arabic in the 
                                classroom, and helped organize cultural activities for afternoon sessions.
                                </p>
                            </div>
                            
                            <div className='experience-div'>
                                <h3>Teaching Assistant</h3>
                                <h4>The Pennsylvania State University</h4>
                                <h4>Fall 2015 to Spring 2017</h4>
                                <p>
                                Graded all students’ work, managed technology in the class room (Twitter for class 
                                participation, Poll Everywhere, ANGEL, Canvas etc.), communicated with students, 
                                taught courses, held office hours, and supplied input/viewpoints for the lectures.
                                </p>
                                    <Collapsible className='additional-info' trigger='List of Classes +' triggerWhenOpen='Close'>
                                        <div className='class-list'>
                                            
                                            <div className='one-class'>
                                                <h5>Comparative Literature: Human Rights and World Literature, Spring 2017</h5>
                                                <h6>Lecturer: Dr. Rose Jolly</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Global Studies: Global Pathways and Connectivity, Spring 2016</h5>
                                                <h6>Lecturer: Dr. Eric Hayot</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5>Comparative Literature: International Film and Literature, Fall 2015</h5>
                                                <h6>Lecturer: Dr. Henry Morello</h6>
                                            </div>

                                        </div>  
                                    </Collapsible> 
                            </div>
                        </Collapsible>
                    </div>

                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Other experience...' triggerWhenOpen='Close'>
                            <div className="experience-div">
                                <h3>Freelance Web Designer/Marketer</h3>
                                <h4>December 2022 to Present</h4>
                                <p>
                                   Work as an independent contractor for all things web! I design, create, and code websites
                                   for businesses and clients of all kinds. In addition to web design, I also work on marketing
                                   campaigns, company image, photography, business cards, logo design, social media posts, articles,
                                   or any desired created content in print or digital format. For full details, feel free to look at
                                   my <a className='resume-link' href='/development'>Web Development Pages</a> or my <a className='resume-link' href='/translation'>
                                    Writing and Translation Pages</a>.
                                </p>

                                <Collapsible className='additional-info' trigger='List of Clients +' triggerWhenOpen='Close'>
                                        <div className='class-list'>
                                            
                                            <div className='one-class'>
                                                <h5><a className='resume-link' href='https://letsdoughdotcom.wpcomstaging.com/' target='_blank' rel='noreferrer'>Let's Dough</a></h5>
                                                <h6>Cookie Bakery/Restaurant in Nice, France</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5><a className='resume-link' href='www.cheznicolas.com' target='_blank' rel='noreferrer'>Chez Nicolas</a></h5>
                                                <h6>Hairdresser in Nice, France</h6>
                                            </div>

                                            <div className='one-class'>
                                                <h5><a className='resume-link' href='www.mybevexp.com' target='_blank' rel='noreferrer'>Beverage Express</a></h5>
                                                <h6>Beer Distributor in Carlisle, PA</h6>
                                            </div>
                                        </div>  
                                </Collapsible> 
                            </div>

                            <div className="experience-div">
                                <h3>Editor</h3>
                                <h4>Trafika Europe</h4>
                                <h4>June 2020 to Present</h4>
                                <p>
                                Design and layout journal issues. Guide and supervise interns on their tasks for the 
                                journal and answer any questions. Continue outreach work in relation to the literary 
                                radio, journal, bookstore, and calendar. Manage and oversee social media posts.
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Outreach Coordinator</h3>
                                <h4>Trafika Europe</h4>
                                <h4>September 2015 to June 2020</h4>
                                <p>
                                Searched for new literature that fit the theme of the quarterly journal as well as 
                                other great works to include and reached out to publishing companies to solicit 
                                the work for translation or gain the rights to publish an excerpt. Completed valuable 
                                research for the creation of the online, literary radio station, the creation of an 
                                online bookshop, and the creation of a European Literary Festival Calendar. Reached 
                                out to literary event creators about the calendar and aided in the stocking of the 
                                online bookshop. 
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Copy Editor</h3>
                                <h4>Asymptote</h4>
                                <h4>June 2018 to April 2020</h4>
                                <p>
                                Proofread and edited translated literature, non-fiction pieces, interviews, and 
                                more for the quarterly issues of the journal. Worked with a team of other copy 
                                editors in order to meet tight deadlines and publish works with a high quality 
                                of English language. Additionally, assisted the project with other editing/writing 
                                tasks, advertised release of issues and other aspects of the site, such as the 
                                book club, and assisted in a variety of outreach tasks. 
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Copy Editor</h3>
                                <h4>Dalkey Archive Press</h4>
                                <h4>January 2019 to January 2020</h4>
                                <p>
                                Proofread, format, and edit translated literature for style, grammar, and 
                                English-language fluidity for Dalkey Archive Press, a publisher of literature 
                                in English translation. 
                                </p>
                            </div>

                            <div className="experience-div">
                                <h3>Research Assistant</h3>
                                <h4>Penn State University, Caroline Eckhardt</h4>
                                <h4>Fall 2016</h4>
                                <p>
                                Assisted Dr. Eckhardt’s research on The Great Famine in Northern Europe 
                                in the early fourteenth-century by finding scholarly articles, books, 
                                and other resources to be used for the completion of an article.

                                </p>
                            </div>
                            
                        </Collapsible>
                    </div>
                </div>
                <div className='study-abroad'>
                <img 
                        src={abroad}
                        alt='Clay at Fort St. Nicolas in Marseille, France'
                        className='resume-img'
                    />
                    <h2 className='title'>Study Abroad</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                                <div className="abroad-div">
                                    <h3>Ronda, Spain</h3>
                                    <h4>Summer 2015</h4>
                                    <p>
                                        Faculty led summer program stationed in southern Spain. Courses included the history of 
                                        Spain (taught by a Spanish professor), Spanish grammar and culture, and an independent 
                                        study in modern Spanish literature. Cultural and historical excursions every weekend to 
                                        experience other parts of Spain, Spanish language, and Spanish culture.
                                    </p>
                                </div>

                                <div className="abroad-div">
                                    <h3>Paris, France</h3>
                                    <h4>Spring 2015</h4>
                                    <p>
                                        Focused on literature courses including a course at Paris IV (Sorbonne) on literary 
                                        history of the 19th century. Lived with a host family in Belleville (12th 
                                        arrondissement). Courses included: Literary History of the 19th Century, Paris – 
                                        Cinema City, Introduction to French Literature, French Women Writers, Advanced 
                                        French Grammar, and History of Paris.
                                    </p>
                                </div>

                                <div className="abroad-div">
                                    <h3>Study Tour of Egypt</h3>
                                    <h4>Summer 2013</h4>
                                    <p>
                                        Faculty led summer program that involved travel to major Egyptian cities such as Cairo, 
                                        Luxor, Alexandria, and more. Courses included: Ancient Egyptian History and an independent 
                                        research project turned into a speech and a paper (subject was The Sphinx).
                                    </p>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='languages'>
                    <img 
                        src={peace}
                        alt='Peace sign with word for peace in Arabic, English, French, and Spanish.'
                        className='resume-img'
                    />
                    <h2 className='title'>Languages</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                                <div className="language-div">
                                    <ul>
                                        <li><strong>English: </strong>native language</li>
                                        <li><strong>French: </strong>high level of speaking, writing, and reading</li>
                                        <li><strong>Spanish: </strong>high level of speaking, writing, and reading</li>
                                        <li><strong>Arabic: </strong>high-intermediate level of speaking, high level of writing and reading</li>
                                        <li><strong>Provençale: </strong>intermediate level of speaking, writing, and reading</li>
                                    </ul>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='publications'>
                    <img 
                        src={publication}
                        alt='Translation by Clay of The Disappearance of Jim Sullivan by Tanguy Viel'
                        className='resume-img'
                    />
                    <h2 className='title'>Publications</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                                <div className="publications-div">
                                    <h3>Academic</h3>
                                        <div className="publication-div">
                                            <h4>“The Self(’s)-Translation of Sexuality and Gender as a Raised Bascule in Hanan al-Shaykh’s Inaha London ya ‘zizi”</h4>
                                            <h5>Chapter in <a className='resume-link' href='https://www.routledge.com/Translation-and-the-Global-City-Bridges-and-Gateways/Woodsworth/p/book/9780367555689?gclid=CjwKCAjwu_mSBhAYEiwA5BBmf4hvQiCKFtgNI2scyx0_YgqJVM6eD5uiim9pC70rFDpj6TDVX1Oy1hoChVgQAvD_BwE' target='_blank' rel='noreferrer'><em>Translation and the Global City</em></a></h5>
                                            <h5>June 2021</h5>
                                        </div>

                                        <div className="publication-div">
                                            <h4>“Translation and Audience: Edgar Allen Poe’s “The Gold-Bug”</h4>
                                            <h5>Article in <a className='resume-link' href='http://www.journals.aiac.org.au/index.php/IJCLTS/issue/view/167' target='_blank' rel='noreferrer'><em>The International Journal of Comparative Literature and Translation Studies
                                                        Volume 5, No. 4 (2017)</em></a></h5>
                                            <h5>2017</h5>
                                        </div>

                                    <h3>Reviews</h3>
                                        <div className="publication-div">
                                            <h4>Review of Margarita Serafimova’s <em>A Surgery of a Star</em></h4>
                                            <h5><a className='resume-link' target='_blank' rel='noreferrer' href='https://www.worldliteraturetoday.org/2021/autumn/surgery-star-margarita-serafimova'>World Literature Today, Autumn 2021</a></h5>
                                            <h5>2021</h5>
                                        </div> 

                                        <div className="publication-div">
                                            <h4>Rawness and Taboo: Kono Taeko’s <em>Toddler Hunting and Other Stories</em> in Review</h4>
                                            <h5><a className='resume-link' href='https://www.asymptotejournal.com/blog/2019/03/07/____-kono-taekos-toddler-hunting-and-other-stories-in-review/' target='_blank' rel='noreferrer'>Asymptote Blog</a></h5>
                                            <h5>2019</h5>
                                        </div> 

                                        <div className="publication-div">
                                            <h4>What’s New in Translation: January 2019 —<em>The Death of Murat Idrissi</em></h4>
                                            <h5><a className='resume-link' href='https://www.asymptotejournal.com/blog/2019/01/07/whats-new-in-translation-january-2019/ ' target='_blank' rel='noreferrer'>Asymptote Blog</a></h5>
                                            <h5>2019</h5>
                                        </div>

                                        <div className="publication-div">
                                            <h4>Le rouge et le noir: <em>Marrakech Noir</em> In Review</h4>
                                            <h5><a className='resume-link' href='https://www.asymptotejournal.com/blog/2018/12/10/le-rouge-et-le-noir-marrakech-noir-in-review/' target='_blank' rel='noreferrer'>Asymptote Blog</a></h5>
                                            <h5>2018</h5>
                                        </div>

                                    <h3>Translations</h3>

                                    <div className="publication-div">
                                            <h4>Juan Udaondo Alegre ““Et esto dixto el grant Hermes en uno de sos castigos”: Uncovering the “Arabic Hermes” in Castilian Wisdom Literature”</h4>
                                            <h5>Spanish to English</h5>
                                            <h5>Forthcoming (translated in September 2022)</h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Tanguy Viel, <em>La disparition de Jim Sullivan</em> (<em>The Disappearance of Jim Sullivan</em>)</h4>
                                            <h5>French to English</h5>
                                            <h5>Full novel published by Dalkey Archive Press in June 2021</h5>
                                            <h5><a className='resume-link' href='https://dalkeyarchive.store/products/the-disappearance-of-jim-sullivan?_pos=1&_psq=jim%20sulli&_ss=e&_v=1.0' target='_blank' rel='noreferrer'>Link to Purchase from Dalkey Archive</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Jean Teulé, <em>Entrez dans la danse</em> (<em>Join the Dance</em>)</h4>
                                            <h5>French to English</h5>
                                            <h5>Excerpt published by Trafika Europe in April 2020</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/TE17-Mysterious-Montenegro' target='_blank' rel='noreferrer'>Link to Excerpt Publication</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Martine Morillon-Carreau, Selected Poems from <em>Poéclats</em> and <em>Pierres d'attente</em></h4>
                                            <h5>French to English</h5>
                                            <h5>Thirteen poems published by Trafika Europe in September 2017</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/Trafika-Europe-11-Swiss-Delights1' target='_blank' rel='noreferrer'>Link to Excerpt Publication</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Charles Pépin, <em>La Joie</em> (<em>Joy</em>)</h4>
                                            <h5>French to English</h5>
                                            <h5>Excerpt published by Trafika Europe in March 2016</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/Trafika-Europe-7-Ukrainian-Prayer' target='_blank' rel='noreferrer'>Link to Excerpt Publication</a></h5>
                                    </div>

                                    <div className="publication-div">
                                            <h4>Tahar Ben Jelloun, <em>L'Ablation</em> (<em>Ablation</em>)</h4>
                                            <h5>French to English</h5>
                                            <h5>Excerpt published by Trafika Europe in December 2015</h5>
                                            <h5><a className='resume-link' href='https://cld.bz/users/user-N5y4U8g/Trafika-Europe-Quarterly/Trafika-Europe-6-Arabesque' target='_blank' rel='noreferrer'>Link to Excerpt Publication</a></h5>
                                    </div>
                                </div>
                            </Collapsible>
                    </div>
                </div>
                <div className='conferences'>
                    <img 
                        src={conference}
                        alt='Newspaper clipping about Clay and his involvement in La Vihado, a conference in/on Provençal language.'
                        className='resume-img'
                    />
                    <h2 className='title'>Conferences</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                                <div className="conference-div">
                                    <h3>Excellence in Pedagogy and Innovative Classrooms</h3>
                                    <h4>Building Sustainable Modern Language Classrooms</h4>
                                    <h4>May 2022</h4>
                                    <p>
                                    Presented on a panel called “Rethinking the Teaching of Writing in the Language Classroom” 
                                    alongside three other panelists. I discussed the importance of creating authentic writing 
                                    experiences that scaffold from the basic to the more creative, particularly for the first 
                                    level of non-native language acquisition. 
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>Canadian Association for Translation Studies</h3>
                                    <h4>Translations, Translators, Interpreters, and Subversion</h4>
                                    <h4>June 2021</h4>
                                    <p>
                                        Presented a paper titled “Sexual Subversion in Latin American Literature: Translating 
                                        Manuel Puig and Reinaldo Arenas” investigates the ethical implications and political 
                                        reflections that arise in the translation of the translation of the loca identity into 
                                        English during the Latin American Literary Boom. A loca identifies biologically as a male 
                                        yet performatively as a female, yearning to embody the feminine role in a relationship 
                                        with a macho. I examine the ways in which these translators minoritize the identity to 
                                        become Anglo-American. 
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>UCLA QGrad</h3>
                                    <h4>Queering Love: Across Subjectivities, Temporalities, and Decolonial Imaginaries</h4>
                                    <h4>January 2020</h4>
                                    <p>
                                        Presented a paper titled “مثليّ (mithlī), Not  مثلي (mithli):  Self-Translation for 
                                        Queer Love in Hanan al-Shaykh’s انها لندن يا عزيز (Only in London, trans. Catherine 
                                        Cobham)” exploring the effects of the Western sexual and gender regime on 
                                        non-Western cultures and languages. Centering specifically on a homosexual, cis-male 
                                        protagonist, I demonstrate how al-Shaykh’s novel underscores the breakdown associated 
                                        with and impossibility of altering one’s identity.
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>UCLA European Languages and Transcultural Studies Conference</h3>
                                    <h4>Porosity and Reciprocity</h4>
                                    <h4>October 2019</h4>
                                    <p>
                                        Presented a paper titled “Diverse Identities in National Homogeneity: Being prouvençau 
                                        amongst lis franchimand” focusing on how people in southern France engage in cultural 
                                        activism and maintain the use Provençale as well as cultural heritage in light of France’s 
                                        attempt at restitution with sub-Saharan Africa and the country’s legacy of colonialism.
                                    </p>
                                </div>

                                <div className="conference-div">
                                    <h3>La Vihado</h3>
                                    <h4>Parlaren à Bouleno</h4>
                                    <h4>March 2018</h4>
                                    <p>
                                    A local conference in Bollène, France for language associations in Provence that teach and 
                                    celebrate Provençal as a living, modern language. Presentation was in Provençal and consisted 
                                    of anecdotes and observations of modern Provincial life and culture.
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
                    <h2 className='title'>Activities</h2>
                    <div className='collapsible-div'>
                        <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                            
                            <div className='experience-div'>
                                <h3>Comparative Literature Graduate Student Association</h3>
                                <h4>University of California, Los Angeles</h4>
                                <h4>January 2020 to September 2021</h4>
                                <p>
                                Coordinate communication between the graduate student population, the CLGSA, and the faculty. Strive to create change and 
                                better relations for all members of the Department  and to build community. Implement various surveys and organizational 
                                tools to amass and disseminate important information. Organize and host two writing retreats each quarter in addition to 
                                other tasks.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Union Department Steward</h3>
                                <h4>UAW 2865 UCLA</h4>
                                <h4>June 2019 to June 2021</h4>
                                <p>
                                Serve as a liaison between the graduate students and TAs in the Department of Comparative Literature and the Union regarding 
                                contracts, grievances, worker’s rights, etc. Create materials and present at various orientations and pedagogy courses 
                                about UAW and its role for graduate students in the UC system. 
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Citizenship Course Instructor</h3>
                                <h4>International Rescue Commission</h4>
                                <h4>August 2019 to March 2020</h4>
                                <p>
                                Teach immigrants and refugees information essential for their success in the American citizenship exams. Translate, 
                                when needed, in order to facilitate comprehension and work on English skills throughout the courses. Provide cultural 
                                information and tips for Los Angeles and the US as a whole to aid assimilation.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Group Organizer</h3>
                                <h4>UCLA Comparative Literature Reading Group</h4>
                                <h4>Spring 2019</h4>
                                <p>
                                Created this group in order to celebrate the 50th Anniversary of Comparative Literature as a discipline at UCLA. We 
                                explored scholarly work from alumni, current graduate students, and faculty that have shaped scholarship in the 
                                discipline while at UCLA and after moving on to other universities and fields.
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>ESL Instructor</h3>
                                <h4>Mid-State Literacy Council</h4>
                                <h4>Fall 2016 to Spring 2017</h4>
                                <p>
                                Volunteered as an instructor of English as a Second Language for adults in the State College community. Taught 
                                introductory and intermediate English over two semesters, edited/reviewed immigration documents and applications 
                                for grammar and syntax, and provided cultural lessons to aid the assimilation process. 
                                </p>
                            </div>

                            <div className='experience-div'>
                                <h3>Treasurer</h3>
                                <h4>The Americanists</h4>
                                <h4>August 2015 to June 2017</h4>
                                <p>
                                This graduate organization focuses on literature and films from the Iberian Peninsula and Central/South 
                                America and the trans-Atlantic influences. The Americanists offer a monthly film showing and host at 
                                least one speaker a year at Penn State.
                                </p>
                            </div>

                        </Collapsible>
                    </div>
                </div>
                <div className='skills'>
                    <img 
                        src={skills}
                        alt='VS Code, Microsoft Word, and Adobe Photoshop screenshot used to make this website'
                        className='resume-img'
                    />
                    <h2 className='title'>Skills</h2>
                    <div className='collapsible-div'>
                            <Collapsible className='additional-info' trigger='Click for the details!' triggerWhenOpen='Close'>
                                <div className="skills-div">
                                    <div>
                                    <ul>
                                        <li>Adobe Programs:</li>
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
                                        <li>Coding Languages:</li>
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
                                        <li>Go Daddy Web Hosting</li>
                                        <li>Heroku</li>
                                        <li>Microsoft Office Programs:</li>
                                            <ul>
                                                <li>Excel</li>
                                                <li>OneDrive</li>
                                                <li>OneNote</li>
                                                <li>Outlook</li>
                                                <li>PowerPoint</li>
                                                <li>Teams</li>
                                                <li>Word</li>
                                            </ul>
                                        <li>Social Media Platforms:</li>
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