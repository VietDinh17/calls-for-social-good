import React from 'react'
import './FormView.css'
import Axios from 'axios';
// import Calendar from 'react-calendar'
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'





class FormView extends React.Component{

    state = {
      date: new Date(),
      time: '',
      convertedString: ''
        

    }
    onChangeDate = (date:Date) => {
        console.log('Date: ', date)
        this.setState({date})
      } 
      onChangeTime = (time:Date) => {
        console.log('Time: ', time)
        this.setState({time})
      } 
     
 convertStr = ()  => {
    this.state.convertedString = this.date.slice(0, 42) + this.time.slice(15);
 }
    render(){
        const {date, time} = this.state
        return(
            <div className="form-view">
            <div className="pic-holder">
                <img className="left-pic" src="https://i.imgur.com/y8FRBRP.jpg" alt=""/>
            </div>
            <div class="form-holder">
                <form id="search-form" role="form">
                <legend>Set a Reminder</legend>
                    <fieldset id="search-fieldset">
                        <label for="date">On this date:</label>
                        <div className="calendar">
                            <label for="date-input">Day
                            <DateFormatInput name='date-input' value={date} onChange={this.onChangeDate}/>
                            
                            </label>
                            <label for="time-input"> Time
                            <TimeFormatInput name='time-input' value={time} onChange={this.onChangeTime}/>
                            </label>
                            </div>
                            <div className="text-block">
                            <label for="reminder">Remind me about:</label>
                        <input id="reminder" type="text" name="reminder"/>
                        </div>
                        
                        <input id="search-submit" type="submit" onSubmit={this.convertStr}/>;
                            
                        }}/>
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