import React from 'react'
import './FormView.css'
import Axios from 'axios';





axios({
    method: "post",
    url: "",
    data: {
        date: "1344582000",
        reminder: "check in on"
    }
}



class FormView extends React.Component{
    render(){
        return(
            <div class="form-view">
            <div class="pic-holder">
                <img class="left-pic" src="https://i.imgur.com/qTMNZsc.jpg" alt=""/>
            </div>
            <div class="form-holder">
                <form id="search-form" role="form">
                <legend>Set a Reminder</legend>
                    <fieldset id="search-fieldset">
                        <label for="reminder">Remind me of:</label>
                        <input id="reminder" type="text" name="reminder"/>
                        <label for="date">On this date:</label>
                        <select id="date" name="date">
                            <option value="01">January</option>
                            <option value="02">February</option>
                            <option value="03">March</option>
                            <option value="04">April</option>
                            <option value="05">May</option>
                            <option value="06">June</option>
                            <option value="07">July</option>
                            <option value="08">August</option>
                            <option value="09">September</option>
                            <option value="10">October</option>
                            <option value="11">November</option>
                            <option value="12">December</option>
                        </select>
                        <label for="day">Day</label>
                        <input id="day" type="text"></input>
                        <label for="year">Year</label>
                        <input id="year" type="text"></input>
                        <div class="radios">
                        <label for="daily">Daily
                        <input type="radio" id="daily"></input>
                        </label>
                        <label for="weekly">Weekly
                        <input type="radio" id="weekly"></input>
                        </label>
                        <label for="monthly">Monthly
                        <input type="radio" id="monthly"></input>
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

export default FormView;