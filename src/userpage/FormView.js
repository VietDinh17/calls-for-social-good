import React from 'react'
import './FormView.css'
import axios from 'axios';
// import Calendar from 'react-calendar'
import {DateFormatInput, TimeFormatInput} from 'material-ui-next-pickers'





class FormView extends React.Component{

    state = {
      date: new Date(),
      time: '',
      convertedString: '',
      value:''
        

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

 setValue = (event) => {
     this.setState({value: event.target.value});
     console.log(this.state.value);
 }

 formSubmit = () =>{
     console.log("123",this.state.date, this.state.time);
    this.state.convertedString = new Date((this.state.date.toString()).slice(0, 42) + (this.state.time.toString()).slice(15)).getTime() / 1000
    
    console.log(this.state.value, this.state.convertedString);
     axios.post('https://cors-anywhere.herokuapp.com/https://calcium-scholar-231323.appspot.com/reminders', {
         info: this.state.value,
         time: this.state.convertedString,
     }).then(function(response) {
         console.log(response);
     })
     .catch(function(err){console.log(err)})
 }
    render(){
        const {date, time} = this.state
        return(
            <div className="form-view">
            <div className="pic-holder">
                <img className="left-pic" src="https://i.imgur.com/y8FRBRP.jpg" alt=""/>
            </div>
            <div class="form-holder">
                {/* <form id="search-form" role="form" onSubmit={this.formSubmit}> */}
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
                        <input id="reminder" type="text" name="reminder" onChange={this.setValue}/>
                        </div>
                        
                        {/* <input id="search-submit" type="submit" onSubmit={this.formSubmit}/> */}
                        <button onClick={this.formSubmit}>ggg</button>
                            
                    
                    </fieldset>
                {/* </form> */}
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