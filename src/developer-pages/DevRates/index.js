import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';


function DevRates() {
    return (
        <div className='rates-content'>
            <h2 className="rates-title">Web Developer Rates</h2>
            <p className="rates-description">While these rates are based on industry standards, all rates are up for negotiation and can be adjusted based on desired project, timeline, and budget.
                The description supplies the basic information for what can be expected at the base fee.
                You are not required to keep me on as a retainer; however, sites can sometimes run into problems and hosting can be complicated. Keeping me on retainer
                means that I'm responsible for site maintenance and hosting for a specified amount of hours each month.
            </p>
            <table className="rates-table">
                <tr className="header-row">
                    <th>Project</th>
                    <th>Rate</th>
                    <th>Description</th>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Template Site (WordPress, Wix, or similar website)</td>
                    <td className='center-data'>Starting at €500,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>1-5 pages of pre-made template design</li>
                                    <li>Search Engine Optimization</li>
                                    <li>Accessibility</li>
                                    <li>Personalization (colors, photos, text) based on client desires</li>
                                    <li>Installations of Plugins and Themes as desired</li>
                                    <li>Hosting and domain assistance</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Template Site Retainer</td>
                    <td className='center-data'>Starting at €20,00/month</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                <li>SEO, speed, and Accessibility check</li>
                                    <li>At least one hour of bug fixes, efficiency tweaks, and content updating</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Personalized Non-Coded Site (WordPress, Wix, etc.)</td>
                    <td className='center-data'>Starting at €750,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>1-5 unique, personalized pages</li>
                                    <li>Complete personalization of site (layout and design)</li>
                                    <li>Check-ins with client for personalization</li>
                                    <li>Search Engine Optimization</li>
                                    <li>Accessibility</li>
                                    <li>Responsive design (mobile, tablet, computer)</li>
                                    <li>Plugins and addons based on client needs</li>
                                    <li>Hosting and domaine assistance</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Personalized Non-Coded Site Retainer</td>
                    <td className='center-data'>Starting at €30,00/month</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>SEO, speed, and Accessibility check</li>
                                    <li>At least one hour of bug fixes, efficiency tweaks, and content updating</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Personalized Coded Front-End Site</td>
                    <td className='center-data'>Starting at €750,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">                    
                            <td>
                                <ul>
                                    <li>1-5 pages of HTML, CSS, and Javascript</li>
                                    <li>Completely personalized based on client desire</li>
                                    <li>Non-restricted creative decisions</li>
                                    <li>Check-ins with client for personalization</li>
                                    <li>Search Engine Optimization</li>
                                    <li>Accessibility</li>
                                    <li>Responsive design (mobile, tablet, computer)</li>
                                    <li>Hosting and domain assistance</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Personalized Front-End Retainer</td>
                    <td className='center-data'>Starting at €50,00/month</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>SEO, speed, and Accessibility check</li>
                                    <li>At least one hour of bug fixes, efficiency tweaks, and content updating</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>

                <tr className='data-row'>
                    <td className='center-data'>Fullstack Web Project with MongoDB/Database, Express, React/Angular, Node</td>
                    <td className='center-data'>Starting at €1000,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>1-5 unique, personalized pages</li>
                                    <li>Complete personalization of site</li>
                                    <li>Check-ins with client for personalization</li>
                                    <li>Search Engine Optimization</li>
                                    <li>Accessibility</li>
                                    <li>Responsive design (mobile, tablet, computer)</li>
                                    <li>Implementation of personalized database</li>
                                    <li>Security for passwords/accounts</li>
                                    <li>Best multi-page coded site for speed</li>
                                    <li>Multiple pages on a single-page application</li>
                                    <li>Hosting and domain assistance</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Full Stack Web Retainer</td>
                    <td className='center-data'>Starting at €75,00</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>SEO, speed, and accessibility check</li>
                                    <li>At least two hours of bug fixes, efficiency tweaks, content updating, and database management</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
            </table>

            <h2 className="rates-title">Web Marketing Services</h2>
            <p className="rates-description">
                Having a site is only one step of the equation for successful online marketing. If you're a new business getting started
                or an established business looking for a new look, an innovative approach, or an in to a new market, I am happy to help! Since all of these services will require
                a consultation for me to know exactly what you're looking for, I have not included any prices here. Send me an email or give me a call and we can discuss the details.
            </p>
            <table className="rates-table">
                <tr className="header-row">
                    <th>Category</th>
                    <th>Possibilities</th>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Web Presence</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>Listing/connecting website online</li>
                                    <li>Creating Google Business profile</li>
                                    <li>Managing and updating Google Business Profile</li>
                                    <li>Social media (Facebook, Instagram, Twitter, Tik Tok) and advertising</li>
                                    <li>SEO blog and article writing</li>
                                    <li>Email and listserv campaigns</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Graphics and Design</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>Logo</li>
                                    <li>Email signatures</li>
                                    <li>Ad campaigns</li>
                                    <li>Photography</li>
                                    <li>Business cards</li>
                                    <li>Menus</li>
                                    <li>Brochures</li>
                                    <li>Company image and branding</li>
                                    <li>Publication and layout</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Writing and Translation</td>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click for more info..." triggerWhenOpen="Click for less info...">
                            <td>
                                <ul>
                                    <li>Business plans</li>
                                    <li>Emails</li>
                                    <li>Website content</li>
                                    <li>Grants, applications, proposals, etc.</li>
                                    <li>Articles, blogs, announcements, etc.</li>
                                    <li>Social media posts</li>
                                    <li>Menus, brochures, pamphlets, etc.</li>
                                    <li>Translate and access new markets in Arabic, English, French, and Spanish</li>
                                </ul>
                            </td>
                        </Collapsible>
                    </div>
                </tr>
            </table>
        </div>
    )
};

export default DevRates;