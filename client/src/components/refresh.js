import React, {Component} from 'react';

class Refresh extends Component{

//   state = {
//     locationData : ''
//   }
//   if (this.props.locationData){
//   this.setState({
//     locationData : this.props.locationData
//   })
// }

render(){
  return(
<div id = 'Refresh'>
<a href= {this.props.currentURL}><button>Try Again</button></a>
</div>
  )
}
}

export default Refresh;
