import React from 'react'
import './FormView.css'
import Axios from 'axios';
// import Calendar from 'react-calendar'
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'





class FormView extends React.Component{

    state = {
      date: new Date(),
      time: ''


    }
    onChangeDate = (date:Date) => {
        console.log('Date: ', date)
        this.setState({date})
      } 
      onChangeTime = (time:Date) => {
        console.log('Time: ', time)
        this.setState({time})
      } 
     

    render(){
        const {date, time} = this.state
        return(
            <div class="form-view">
            <div class="pic-holder">
                <img class="left-pic" src="https://i.imgur.com/y8FRBRP.jpg" alt=""/>
            </div>
            <div class="form-holder">
                <form id="search-form" role="form">
                <legend>Set a Reminder</legend>
                    <fieldset id="search-fieldset">
                        <label for="reminder">Remind me about:</label>
                        <input id="reminder" type="text" name="reminder"/>
                        <label for="date">On this date:</label>
                        <div class="calendar">
                            <label for="date-input">Day
                            <DateFormatInput name='date-input' value={date} onChange={this.onChangeDate}/>
                            
                            </label>
                            <label for="time-input"> Time
                            <TimeFormatInput name='time-input' value={time} onChange={this.onChangeTime}/>
                            </label>
                        </div>
                        <input id="search-submit" type="submit"/>
                    </fieldset>
                </form>
            </div>
            </div>
        )
    }
}


// class FormView extends React.Component {
//     state = {
//       date: new Date(),
//     }
   
//     onChange = date => this.setState({ date })
   
//     render() {
//       return (
//         <div>
//           <Calendar
//             onChange={this.onChange}
//             value={this.state.date}
//           />
//         </div>
//       );
//     }
//   }

export default FormView;