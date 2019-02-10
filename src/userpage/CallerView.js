import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

const users = [
    {
        name: "kaka",
        pic: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
    },
    {
        name: "lala",
        pic: "https://png2.kisspng.com/sh/3923f1608f080159ed97426f2f5a4143/L0KzQYm3VcA6N6R9fZH0aYP2gLBuTfF3aaVmip9Eb4X3hbPsTcguapJxhJ95b3BvPcb6hgIuPZJrS6QDZHO3cYbthcEvQWE9SqcDNkm0RYO8WMg2OWU9S6I9Nz7zfri=/kisspng-avatar-youtube-8-ball-pool-user-5af328dc4a5fe1.9082586915258851483047.png"   
    },
    {
        name: "kaka",
        pic: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
    },
    {
        name: "kaka",
        pic: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
    },
    {
        name: "kaka",
        pic: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
    },    {
        name: "kaka",
        pic: "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
    },
]


class CallerView extends React.Component{
    componentDidMount(){

    }

    componentWillUnmount(){

    }
    
    render(){
        const {classes} = this.props;
        return(
            <div>
                <Typography>People</Typography>
                <List dense className={classes.root}>
                    {users.map(value => (
                    <ListItem key={value} button>
                        <ListItemAvatar>
                        <Avatar
                            alt={`Avatar n°${1 + 1}`}
                            src={value.pic}
                        />
                        </ListItemAvatar>
                        <ListItemText primary={value.name} />
                        <ListItemSecondaryAction>
                        {/* <Checkbox
                            onChange={this.handleToggle(value)}
                            checked={this.state.checked.indexOf(value) !== -1}
                        /> */}
                        </ListItemSecondaryAction>
                    </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

CallerView.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(CallerView);