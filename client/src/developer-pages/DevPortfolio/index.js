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

function DevPortfolio() {
    return (
        <div className='portfolio-div'>

        <h2 className="title">Work for Clients</h2>
        <div className='sites-div'>
        
            <div className='site'>
                <div className='title-info'>
                <h3 className='site-title'>Beverage Express</h3>
                <h4 className='site-locale'>Beer Distributor in Carlisle, PA</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://www.mybevexp.com/' target='_blank'>mybevexp.com</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://github.com/cmckee120993/react-my-bev' target='_blank'>Github Link</a></h4>
                </div>  
                <div className='img-div'>     
                <img
                    src={bevLogo}
                    alt='Logo designed by Clay for Beverage Express'
                    className='logo-img'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>This website is an ongoing project with Beverage Express. It began as a coding project for UCLA's bootcamp, but it has 
                            since evolved into an ongoing employment for the store. The current site includes access to the store's inventory via a <a rel='noreferrer' className='site-link' href='https://www.mybevexp.com/search' target='_blank'>
                            "Search"</a> page that uses an API powered by Mpower Beverage. The <a rel='noreferrer' className='site-link' href="https://www.mybevexp.com/seasonal" target="_blank">What's On Tap?"</a> page also employs an API from 
                            the Untappd social media platform. Both of these pages update automatically when the store updates their database and/or social media. The site also features a hamburger menu, 
                            responsive design, contact information, SEO, and social media connectivity. The site is created using JavaScript, HTML, CSS, and React. This business also took advantage of my offers for logo design,
                            social media posting, listserv creation/maintenance, and Google Business page maintenance.
                        </p>
                        <img
                            src={bevImage}
                            alt='Beverage Express website home page.'
                            className='site-image'
                        />
                        <p className='site-description'>Current developments for this ongoing project include implementation of MongoDB and Apollo server in order to
                            allow the store to take orders for delivery and curbside pickup. I am using the base of my Bootcamp Project to revamp this MERN stack application
                            with knowledge gained since the bootcamp. Customers will be able to create accounts, have authorization upon logging in
                            to add items to a cart that is created using Component State and hooks. The order is then sent to the store where it will be accessed using an
                            admin login/panel. The admin will be able to update order status after fulfilling the order. Customers will be able to update their information,
                            see their order status, and look at their order history in their own customer panel.
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
            <div className='title-info'>
                <h3 className='site-title'>Chez Nicolas</h3>
                <h4 className='site-locale'>Hairdresser in Nice, France</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://www.cheznicolas.com/' target='_blank'>cheznicolas.com</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://github.com/cmckee120993/chez-nicolas' target='_blank'>Github Link</a></h4>
                </div>
                <div className='img-div'>     
                <img
                    src={chezNicolasLogo}
                    alt='Logo designed by Clay for Chez Nicolas'
                    className='logo-img'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>This website was for a client who is a freelance hairdresser that travels and cuts hair in people's homes.
                            The site is made with React, JavaScript, CSS, and HTML. It includes a table of his services, various images showcasing his work, and connectivity to 
                            various social media and communication outlets to allow people to contact him. In addition to the website, I was also employed to assist in the creation
                            of a Google Business page, business card, social media posts, design (image on <a href='www.cheznicolas.com/moi' target='_blank' rel='noreferrer' className='site-link'>
                            About page</a>), and photo editing. This site is in French, a responsive web design, and SEO friendly.
                        </p>
                        <img
                            src={chezNicolasImage}
                            alt='Chez Nicolas website home page.'
                            className='site-image'
                        />
                        <p className='site-description'>If the client wishes to develop the site further, I would include an Instagram gallery of his work that updates automatically when he posts online.
                            Since Nicolas also speaks English, he has expressed interest in translating his site; therefore, I would also code in the ability to access the information in English and translate
                            the pages for him.
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
            <div className='title-info'>
                <h3 className='site-title'>Let's Dough</h3>
                <h4 className='site-locale'>Cookie Bakery/Restaurant in Nice, France</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://letsdoughdotcom.wpcomstaging.com/' target='_blank'>letsdough.com</a></h4>
               </div>
               <div className='img-div'>     
                <img
                    src={letsDoughLogo}
                    alt="Logo for Let's Dough"
                    className='logo-img'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>I took on this website after a previous developer had to leave the project. The only page
                            finished was the home page, so I was tasked with adding on a header/footer, finalizing some details on the home page, connecting
                            to other pages on the site, and styling the other pages to match Let's Dough's colorful style. The site was made using Elementor
                            and Wordpress. The project was completed in French.
                        </p>
                        <img
                            src={letsDoughImage}
                            alt="Let's Dough website home page."
                            className='site-image'
                        />
                        <p className='site-description'>This client is in the process of designing and renovating their locale, so the site is on hold
                            for a moment. I am waiting for photos and their opening menu to finalize the "About" page and add the first piece of "Cookie News".
                            Upon finalizing the website, I will be assisting Let's Dough by setting up their Woocommerce plugin as well as hosting their site
                            on a domain.
                        </p>
                    </Collapsible>
                </div>
            </div>

            <div className='site'>
            <div className='title-info'>
                <h3 className='site-title'>Static Beverage Express</h3>
                <h4 className='site-locale'>Beer distributor in Carlisle, PA</h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' 
                    href='https://github.com/cmckee120993/beverage-express' target='_blank'>Github Repo</a></h4>
                </div>
                <div className='img-div'>     
                <img
                    src={projectThree}
                    alt="Logo for Let's Dough"
                    className='logo-img'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>This website was a placeholder for larger, more in-depth website for Beverage Express, a beer distributor in Carlisle, Pennsylvania. The styling fits their desires. 
                            The favicon and the business' logo were also designed by me. The first step is this static, single-page site, which lists their current products on tap, their contact, and some basic information about the store. 
                            The project was coded using HTML, CSS, and Bootstrap. 
                        </p>
                    </Collapsible>
                </div>
            </div>

        </div>
        
        <h2 className="title">My Bootcamp Projects</h2>
        <div className='sites-div'>
            
            <div className='site'>
            <div className='title-info'>
                
                <h3 className='site-title'>My Bev Express</h3>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://my-bev-express.herokuapp.com/' target='_blank'>
                    Project Link</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://github.com/cmckee120993/my-bev-express-project' target='_blank'>
                    Github Link</a></h4>
                    </div>
                    <div className='img-div'>     
                <img
                    src={bevImage}
                    alt="Beverage Express project screenshot"
                    className='site-image'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>My Bev Express is a MERN application for clients of Beverage Express in Carlisle, Pennsylvania.
                            Users can create an account, login, search products, fill a cart, and send an order in for delivery. The cart uses global state, and the 
                            user information and the orders use MongoDB.  An API from mPower (a beverage business company) supplies access to the store database. In 
                            addition to the coding skills, I designed all logos on the site! Skills used in project:
                            <ul>
                                <li>MERN stack</li>
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
            <div className='title-info'>
                <h3 className='site-title'>Courier App</h3>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://courier-share.herokuapp.com/' target='_blank'>
                    Project Link</a></h4>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://github.com/joejhansen/courier-app' target='_blank'>
                    Github Link</a></h4>
                    </div>
                    <div className='img-div'>     
                <img
                    src={projectOne}
                    alt="Courier App project screenshot"
                    className='site-image'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>Courier App allows writers and creatives to join virtual writing groups that allow them to post their
                             work to a specific group of users. When posting work, a WYSIWYG editor helps correct grammatical and typographical errors. Users within 
                             a group may then comment on the writing in the app. Groups are made private and available by invite only. Users must create a log in, 
                             create a group, and then add other users into the group. This moderator can then also remove people from the group if desired; users 
                             can make and belong to as many groups as they'd like. This website is created using Handlebars and a MYSQL database. This project was 
                             a collaboration with Joseph Hansen, Katarina Mihaylovich, and Inna Sherstnyova. Click on the links above to check it out! Skills used:
                            
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
            <div className='title-info'>
                <h3 className='site-title'>Fortnite App</h3>
                <h4 className='site-locale'><a rel='noreferrer' className='internal-link' href='https://swyner97.github.io/fortnite-app/' target='_blank'>
                    Project/Github Link</a></h4>
                    </div>
                    <div className='img-div'>     
                <img
                    src={projectTwo}
                    alt="Fortnite App project screenshot"
                    className='site-image'
                />
                </div>
                <div className='collapsible-div'>
                    <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                        <p className='site-description'>This website is for Fortnite players who wish to look at how they can customize their characters without having to log onto the game. Two APIs populate the daily store as well as a full store archive.
                            The project uses local storage to allow users to add gear that they want to a wish list for later. Rather than having to scroll through the entire archive, users can search for desired items, even if they aren't in the Fortnite Store for that day. 
                            This project was a collaboration with  Sarah Wyner and Andre Silva. Click on the links to check it out! Skills used:
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

export default DevPortfolio;