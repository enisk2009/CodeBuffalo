import React, {Component} from 'react';

//import components
import Back from './back';
import LocationInput from './locationInput';


class EventForm extends Component{

  render(){
    return(
      <div id = 'eventForm'>

      <div>
      <Back/>
      <LocationInput/>
      </div>



      </div>
    );
  }
}

export default EventForm;
