import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

//import components
import Back from './back';
import Refresh from './refresh';

//make query for activities
const getActivityQuery = gql`
{
  activity{
    activity
  }
}
`


class activity extends Component{

  state = {
    currentURL: '/activity'
  }

  displayActivity(){
    var data = this.props.data;

    if (data.loading){
      return(<div>Data is loading...</div>);
    }
    else{
      return (<h1>{data.activity.activity}</h1>);
      }
    }


render(){
console.log(this.props.data);

  return(

<div id= 'activity'>


<Back/>
<h1>{this.displayActivity()}</h1>

<Refresh currentURL = {this.state.currentURL}/>

</div>
);
}
}

export default graphql(getActivityQuery)(activity);
