import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Back extends Component {
  render(){
    return(
      <div id = 'back'>
      <Link to="/"><button>Back</button></Link>
      </div>
    );
  }
}


export default Back;
