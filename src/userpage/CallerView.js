import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes, { func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './CallerView.css'
import axios from 'axios';
import Collapse from '@material-ui/core/Collapse';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});

let user = {
    "name": "John",
    "pic": "https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
}

class CallerView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            users : [],
        }
    }
    componentDidMount(){
        let self = this;
        axios.get('https://48ca599c-9f88-4c75-965b-465084a2340a.mock.pstmn.io/get')
            .then(function (respone){
                self.setState({
                    users : respone.data.users
                })
                console.log(respone);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentWillUnmount(){

    }
    
    render(){
        const {classes} = this.props;
        const {users} = this.state;
        return(
            <div>
                <div>
                    <div id="picmain">
                        <ul>
                        <Typography></Typography>
                        <li><img id="profile-pic-main" src={user.pic}></img></li>
                        <li>{user.name}</li>
                        </ul>
                    </div>
                </div>
                <div id="caller-list">
                    <Typography>Caller List</Typography>
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
            </div>
        )
    }
}

CallerView.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

export default withStyles(styles)(CallerView);