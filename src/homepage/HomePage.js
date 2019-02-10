import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Phone from '@material-ui/icons/Phone';
import List from '@material-ui/icons/ListAlt';
import Person from '@material-ui/icons/PersonPin';




class HomePage extends React.Component{
    render(){
        return(
            <div className="body">
                {/* HomePage Here
                <Link to="/callerView">
                <button>
                    callerView
                </button>
                </Link> */}
                    <section id="one">
                        <div id="jumbo">
                        <div id="inner-1">
                            <div id="left-jumbo">
                            <h1>Never forget with CareTaker</h1>
                            <div>
                            <p id="info-block" className="html">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <img id="left-top" src="https://images.unsplash.com/photo-1532077087200-5e14a551dd53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" alt=""></img>
                            <img id="right-bottom" src="https://images.unsplash.com/photo-1522356039805-7dedeb7e0f60?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" alt=""></img>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div id="info-nav">
                        <button className="info-button">Learn More</button>
                        <Link to='/caller'>
                        <button className="info-button">Call Now</button>

                        </Link>
                        </div>
                    </section>

                    <main>
                        <section id="what-this">
                            <h2>What is CareTaker</h2>
                            <p>Our App crowdsources human reminders for a more personable touch. Pre-screened volunteers make a personal call at a given time to check up on or remind users. Privacy is of utmost importance, and phone numbers are completely anonymized. Volunteers see only the first name and provided reminder info, and receive a text from a proxy number to call when it is time to deliver the reminder.</p>
                            <div id="what-is">
                                <div className="info-blocc">
                                    <ul className="un-list">
                                        <Phone/>
                                        <li>Responsive callers</li>
                                        <li>Real people</li>
                                        <li>Get remind</li>
                                        <li>Never forget</li>
                                    </ul>
                                </div>
                                <div className="info-blocc">
                                    <ul className="un-list">
                                    <List/>
                                        <li>Remember Important:</li>
                                        <li>Dates</li>
                                        <li>Events</li>
                                        <li>Appointments</li>
                                    </ul>
                                </div>
                                <div className="info-blocc">
                                    <ul className="un-list">
                                    <Person/>
                                    <li>Peace of mind</li>
                                    <li>Assurance</li>
                                    <li>Verified callers</li>
                                    <li>Safe loved ones</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        <section>
                            <div><img id="pic2" src="https://i.imgur.com/3dxQuAG.jpg"></img>
                                <div></div>
                            </div>
                        </section>
                    </main>
                
            </div>
        )
    }
}

export default HomePage;