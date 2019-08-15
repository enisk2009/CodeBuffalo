import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//import components
import RandomEvent from './randomEvent';

class LocationInput extends Component{

  state = {
    currentURL: '/eventForm',
    inputLocation:''
  }
  handleSubmit(e){
    e.preventDefault();
  }


//sets the state to the location value that the user inputs, it then stores this value in the local storage
  handleChange = (e) =>{
    this.setState({ inputLocation: e.target.value}, function(){
      localStorage.setItem('inputLocation', this.state.inputLocation)
    });
  }


  render(){
    return(
      <div id = 'LocationInput'>

      <form  onSubmit = {(e) => this.handleSubmit(e)}>
      <label>
      Enter your city or ZIP code:
      <br/>
      <input type="text" name="ZIP" onChange = {this.handleChange}/>
      <br/>
      <Link to={{
        pathname: "/randomEvent",
        data: {inputLocation: this.state.inputLocation}
      }}><input type="submit" value="Submit" /></Link>
      </label>
      </form>
      </div>
    )
  }
}

export default LocationInput;
