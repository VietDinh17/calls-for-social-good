import React from 'react';
import { Link } from 'react-router-dom';

class HomePage extends React.Component{
    render(){
        return(
            <div>
                HomePage Here
                <Link to="/callerView">
                <button>
                    callerView
                </button>
                </Link>

            </div>
        )
    }
}

export default HomePage;