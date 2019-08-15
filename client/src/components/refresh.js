import React, {Component} from 'react';

class Refresh extends Component{

render(){
  return(
<div id = 'Refresh'>
<a href= {this.props.currentURL}><button>Try Again</button></a>
</div>
  )
}
}

export default Refresh;
