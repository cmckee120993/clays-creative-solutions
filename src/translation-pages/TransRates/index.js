import React from 'react';
import './style.css';
import Collapsible from 'react-collapsible';


function TransRates() {
    return (
        <>
            <h2 className="rates-title">Translation and Editing Rates</h2>
            <p className="rates-description">
                I provide a variety of services fitting a variety of projects and client needs. Take a 
                look at the following table to get an idea about what is included in each service. I work 
                on contract and for a retainer fee. Prices, while based on the <a className='trans-link' 
                href='https://www.the-efa.org/rates/' target='_blank' rel='noreferrer'>Editorial Freelancers 
                Association</a>, depend on the project length, your budget, the desired deadline, and the 
                contract. Email me with a description of the project, timeline for completion, and the type
                work you would like done for a consultation and an estimate. For larger projects, I offer a
                sample of a maximum of 1,000 words. Prices are ultimately calculated based on manuscript
                length, amount of work needed, and requested deadline. 
            </p>
            <table className="trans-rates-table">
                <tr className="header-row">
                    <th>Service</th>
                    <th>Details</th>
                    <th>Rate</th>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Copyediting</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Spellchecking</li>
                                    <li>Correcting grammar/punctuation</li>
                                    <li>Formatting citations and manuscript to fit a specific style guide
                                        (MLA, Chicago, house style, APA, etc.)</li>
                                    <li>Fact checking</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info..."> 
                                    <ul>
                                        <li>Fiction: $36-$40/hr or $.02-$.03/word</li>
                                        <li>Nonfiction: $41-$45/hr or $.03-$.04/word</li>
                                        <li>Business/Sales: $46-$50/hr or $.04-$.05/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Curriculum Development</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Organization of materials</li>
                                    <li>Verify curriculum meets standards</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$51-$60/hr</li>
                                        <li>$.04-$.05/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Design /Layout /Formatting</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Formatting manuscript</li>
                                    <li>Graphic and/or text-based</li>
                                    <li>Anything "mise-en-page"</li>
                                    <li>Printed materials or electronic files (i.e. ready for e-publishing or printing) created</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$46-$50/hour</li>
                                        <li>$.02-$.04/word</li>
                                        <li>*Printed materials may incur extra fees</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Indexing</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Done after second proof stage (when pages are final)</li>
                                    <li>Create back-of-book index</li>
                                    <li>Alphabetize list</li>
                                    <li>Select important terms/references</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$36-$40/hour</li>
                                        <li>$.02-$.03/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Line Editing</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Focus on sentences/paragraphs</li>
                                    <li>Error correction</li>
                                    <li>Focus on language and style</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$46-$50/hour</li>
                                        <li>$.04-$.05/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Marketing and Promotion</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Publicizing work</li>
                                    <li>Promotion strategies</li>
                                    <li>Press releases</li>
                                    <li>Ad creation</li>
                                    <li>See also web development for site possibilities</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$51-$60/hour</li>
                                        <li>$.08-$.09/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Proofreading</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Typographical error checking</li>
                                    <li>Resolve formatting issues</li>
                                    <li>Compare stages of project to verify corrections</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>Fiction: $31-$35/hr, $.02-$.03/word</li>
                                        <li>Nonfiction: $36-$40/hr, $.02-$.03/word</li>
                                        <li>Business/Sales: $41-$45/hr, $.04-$.05/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Research/Fact Checking</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Confirming validity of statements</li>
                                    <li>Deep scrutiny of facts</li>
                                    <li>Importing for journalistic and historical writing (fiction or nonfiction)</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$46-$50/hour</li>
                                        <li>$.05-$.06/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Transcription</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Convert audio into text</li>
                                    <li>Interviews, speeches, meetings, dictations, etc.</li>
                                    <li>Assurance of grammar, spelling, and accuracy</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$36-$40/hour</li>
                                        <li>$.09-$.10/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Translation</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Translation from/into Arabic, English, French, Provençal, and Spanish</li>
                                    <li>Maintain meaning of the original</li>
                                    <li>Supply consistency of tone</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>$46-$50/hour</li>
                                        <li>$.11-$.15/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
                <tr className='data-row'>
                    <td className='center-data'>Writing</td>
                    <td className='border-data'>
                    <div className='collapsible-div'>
                        <Collapsible className="additional-info" trigger="Click see details..." triggerWhenOpen="Click for less info...">
                                <ul>
                                    <li>Produce any type of text (short story, reports, nonfiction/fiction books, proposals, etc.</li>
                                    <li>Create original material or rework existing material</li>
                                    <li>Ghostwriting</li>
                                </ul>
                        </Collapsible>
                    </div>
                    </td>
                    <td classNem='border-data'>
                        <div className='collapsible-div'>
                            <Collapsible className="additional-info" trigger="Click see rates..." triggerWhenOpen="Click for less info...">
                                    <ul>
                                        <li>Fiction: $51-$60/hr, $.09-$.10/word</li>
                                        <li>Noniction: $61-$70/hr, $.11-$.15/word</li>
                                        <li>Business/Sales: $61-$70/hr, $.16-$.20/word</li>
                                        <li>Journalism: $51-$60/hr, $.31-$.50/word</li>
                                    </ul>
                            </Collapsible>
                        </div>
                    </td>
                </tr>
            </table>
        </>
    )
};

export default TransRates;