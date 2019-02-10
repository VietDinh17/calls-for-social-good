import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MusicNote from '@material-ui/icons/MusicNoteRounded';
import {Link} from "react-router-dom"
import './header.css';
import Phone from '@material-ui/icons/PersonOutlineTwoTone';


const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    marginRight: 5,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
  }
  
};


function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <div className='nav-bar'>
        <ul className='nav-inner'>
          <Link className="logo" to='/'>
          <li>Logo</li>
          </Link>
          <Link className="login" to='/login'>
          <li>Login</li>
          </Link>
          <li className="sign-up">Sign Up</li>
          
        </ul>
      </div>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
