import React, {Component} from 'react';
import {Link} from 'react-router-dom';




class home extends Component{
render(){
  return(
  <div id = 'home'>
    <h1>The Boring App</h1>

    <div id = 'activitySelector'>
      <Link to="/activity"><button>Press HERE For a Random Activity.</button></Link>
    </div>

    <div id = 'eventSelector'>
      <Link to="/eventForm"><button>Press HERE For a Random Event Near You.</button></Link>
    </div>

  </div>
);
}
}

export default home;
