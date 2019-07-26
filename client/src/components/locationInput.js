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
    //this.props.onSubmit();
    console.log(this.state);
    //location.href = '/RandomEvent';
    // var a = document.createElement('a');
    // a.href= '/RandomEvent';
    //window.location = '/randomEvent'
    // this.props.history.push({
    //   pathname: '/randomEvent',
    //   data: {name:'Ennis'} // your data array of objects
    //})
  }
  //this will allow you to prevent the default action of submit which is to reload the page
  //this is placed in the form tag
  //onSubmit={this.handleSubmit.bind(this)}

//sets the state to the location value that the user inputs, it then stores this value in the local storage
  handleChange = (e) =>{
    this.setState({ inputLocation: e.target.value}, function(){
      localStorage.setItem('inputLocation', this.state.inputLocation)
    });
    //console.log(this.state)
    localStorage.setItem('inputLocation', 'abs')
  }
  render(){
    return(
      <div id = 'LocationInput'>

      <form  onSubmit = {(e) => this.handleSubmit(e)}>
      <label>
      Enter Your ZIP Code:
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
