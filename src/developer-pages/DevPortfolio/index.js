import React from 'react';
import './style.css';
import Spotlight from '../../images/my-bev-express-screenshot.png';
import projectOne from '../../images/courier-app.png';
import projectTwo from '../../images/fortnite-app-screenshot.png';
import projectThree from '../../images/beverage-express.jpg';
import Collapsible from 'react-collapsible';

function DevPortfolio() {
    return (
        <>
            <h2 className="portfolio-title">Work for Clients</h2>
                <div className='sites-div'>
                    <div className='site'>
                        <h3>Beverage Express</h3>
                        <h4>Beer Distributor in Carlisle, PA</h4>
                        <img
                            src=
                            alt='Beverage Express website home page.'
                            className='site-image'
                        />
                    </div>
                </div>
            <h2 className="portfolio-title">My Bootcamp Projects</h2>
            <div>
                <div className="spotlight-header">
                    <h3 className="project-header">Spotlight: My Bev Express</h3>
                </div>
                <a href="https://my-bev-express.herokuapp.com/">
                    <img src={Spotlight} alt="" className="spotlight-image" />
                </a>
                <p className="description">My Bev Express is a MERN application for clients of Beverage Express in Carlisle, Pennsylvania.
                Users can create an account, login, search products, fill a cart, and send an order in for delivery. The cart uses global state, and the user information and the orders use MongoDB. 
                An API from mPower (a beverage business company) supplies access to the store database. In addition to the coding skills, I designed all logos on the site!</p>
                <ul className="skill-list">
                    <li>MERN stack</li>
                    <li>CSS/Flexbox</li>
                    <li>Graphql</li>
                    <li>API</li>
                    <li>FreeForm Contact Forms</li>
                </ul>
            </div>
            <div className="other-projects">
                <h3 className="project-header">Other Projects</h3>
                <div className="project-one">
                    <a href="https://courier-share.herokuapp.com/">
                        <img src={projectOne} alt="Text editing application screenshot" className="project-image" />
                    </a>
                    <div className="collapsible-div">
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <p className="description">Courier App allows writers and creatives to join virtual writing groups that allow them to post their work to a specific group of users. When posting work, a WYSIWYG editor helps correct grammatical and typographical errors. 
                    Users within a group may then comment on the writing in the app. Groups are made private and available by invite only. Users must create a log in, create a group, and then add other users into the group. 
                    This moderator can then also remove people from the group if desired; users can make and belong to as many groups as they'd like.
                    This website is created using Handlebars and a MYSQL database. This project was a collaboration with Joseph Hansen, Katarina Mihaylovich, and Inna Sherstnyova. Click on the image to check it out!
                            </p>
                            <ul className="skill-list">
                                <li>Node</li>
                                <li>Express</li>
                                <li>MySQL</li>
                            </ul>
                        </Collapsible>
                    </div>
                </div>

                <div className="project-two">
                    <a href="https://swyner97.github.io/fortnite-app/">
                        <img src={projectTwo} alt="Fortnite gear and skins website screenshot" className="project-image" />
                    </a>
                    <div className="collapsible-div">
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <p className="description">This website is for Fortnite players who wish to look at how they can customize their characters without having to log onto the game. Two APIs populate the daily store as well as a full store archive.
                            The project uses local storage to allow users to add gear that they want to a wishlist for later. Rather than having to scroll through the entire archive, users can search for desired items, even if they aren't in the Fortnite Store for that day. 
                            This project was a collaboration with  Sarah Wyner and Andre Silva. Click on the image to check it out!
                            </p>
                            <p className="note">Before using the site, please go to <a href="https://cors-anywhere.herokuapp.com/corsdemo">Heroku App</a> to gain access to the proxy.</p>
                            <ul className="skill-list">
                                <li>HTML</li>
                                <li>CSS/Bulma</li>
                                <li>JavaScript/Jquery</li>
                                <li>APIs</li>
                            </ul>
                        </Collapsible>
                    </div>
                </div>

                <div className="project-three">
                    <a href="mybevexp.com">
                        <img src={projectThree} alt="Beer distributor website screenshot" className="project-image" />
                    </a>
                    <div className="collapsible-div">
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <p className="description">This website is a placeholder for larger, more in-depth website for Beverage Express, a beer distributor in Carlisle, Pennsylvania. The styling fits their desires. 
                                The favicon and the business' logo were also designed by me. The first step is this single-page site, which lists their current products on tap, their contact, and some basic information about the store. 
                                My contract continues with them to create a more dynamic site with product search capability, order options, and more! Click on the image to check it out!</p>
                            <ul className="skill-list">
                                <li>HTML</li>
                                <li>CSS/Bootstraps</li>
                            </ul>
                        </Collapsible>
                    </div>
                </div>
            </div>
        </>
    )
};

export default DevPortfolio;