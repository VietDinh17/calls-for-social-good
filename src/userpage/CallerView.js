import React from 'react';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './CallerView.css'
import axios from 'axios';
import Modal from '@material-ui/core/Modal';




const styles = theme => ({
//   root: {
//     width: '100%',
//     maxWidth: 800,
//     backgroundColor: "red",
//   },
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  }
});


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

class CallerView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reminders : [],
            profile: {},
            open: false,
            refres: false,
        }
    };

    handleOpen = () => {
        this.setState({ open: true });
      };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount(){
        let self = this;
        axios.get('https://cors-anywhere.herokuapp.com/https://calcium-scholar-231323.appspot.com/reminders')
            .then(function (respone){
                self.setState({
                    reminders : respone.data.reminders
                })
                console.log(respone);
            })
            .catch(function (error) {
                console.log(error);
            })
        
            axios.get("https://f763df06-87de-4654-b6f5-5e49742ba2da.mock.pstmn.io/get")
                .then(res => {
                    self.setState({
                        profile : res.data.user,
                    })
            })
    }

    handlePost(reminder){
        console.log(reminder)
        axios.post('https://cors-anywhere.herokuapp.com/https://calcium-scholar-231323.appspot.com/update_reminder', 
        {
            info: reminder.info,
            caller: reminder.caller,
            time: reminder.time,
            name: reminder.name,
            callee: reminder.callee,
            id: reminder.id
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
          })
        .catch(function (error) {
            console.log(error);
        })
        this.handleClose();
        let change = this.state.reminders.filter(r => r.id !== reminder.id);
        this.setState({reminders:change})
    }

    componentWillUnmount(){

    }

    
    render(){
        const {classes} = this.props;
        const {reminders, profile} = this.state;
        return(
            <div>
                <div>
                    <div id="picmain">
                        <ul id="profile-list">
                        <Typography></Typography>
                        <li><img id="profile-pic-main" src={profile.pic} alt=""/></li>
                        <li>{profile.name}</li>
                        <li>{profile.age} Years Old</li>
                        <li>{profile.adress}</li>
                        </ul>
                    </div>
                </div>
                <div id="caller-list">
                    <Typography id="caller-main" variant="h2">Caller List</Typography>
                    <List dense className={classes.root}>
                        {reminders.map(reminder => (
                        <ListItem key={reminder.id} button>
                            <ListItemAvatar>
                            <Avatar

                                alt={`Avatar n°${1 + 1}`}
                                src="https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-512.png"
                            />
                            </ListItemAvatar>
                            <li class="call-item-name">{reminder.name}</li>
                            <li class="call-item-name">{reminder.info}</li>
                            <li class="call-item-name">{(new Date(reminder.time*1000)).toString()}</li>
                            <Modal
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                open={this.state.open}
                                onClose={this.handleClose}
                            >
                            <div style={getModalStyle()} className={classes.paper}>
                                <Typography variant="h6" id="modal-title">
                                    You are Going to Register for This
                                </Typography>
                                <Button size="large" variant="outlined" color="secondary" onClick={ () => this.handlePost(reminder) }>Yes</Button>
                                <Button size="large" component="span" variant="outlined" onClick={this.handleClose}>Cancle</Button>
                            </div>
                            </Modal>
                            <button class="call-btn" onClick={this.handleOpen}>Setup Reminder</button>
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