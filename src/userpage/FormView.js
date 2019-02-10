import React from 'react'
import './FormView.css'

class FormView extends React.Component{
    render(){
        return(
            <div class="form-view">
            <div class="pic-holder">
                <img class="left-pic" src="https://i.imgur.com/qTMNZsc.jpg" alt=""/>
            </div>
            <div class="form-holder">
                <form id="search-form" role="form">
                    <fieldset id="search-fieldset">
                        <label for="firstName">Ticker Symbol</label>
                        <input id="firstName" type="text" name="firstName"/>
                        <label for="reminder">Market</label>
                        <input id="reminder" type="text" name="reminder"/>
                        <input id="search-submit" type="submit"/>
                    </fieldset>
                </form>
            </div>
            </div>
        )
    }
}

export default FormView;