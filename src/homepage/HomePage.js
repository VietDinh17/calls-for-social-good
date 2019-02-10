import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

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
                            <h1>CallerApp</h1>
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
                        <Link to='/CallerView'>
                        <button className="info-button">CallNow</button>

                        </Link>
                        </div>
                    </section>
                
            </div>
        )
    }
}

export default HomePage;