import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import { withStyles } from '@material-ui/core';

const styles = {
    bar: {
      top: 600,
      bottom: 0
    },
};

class Footer extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const {classes} = this.props;
        return(
            <div className={classes.bar}> 
                <footer>
                    <div></div>
                </footer>
            </div>
        )
    }
}

export default withStyles(styles)(Footer);