import React, {Component} from 'react';
import {gql} from 'apollo-boost';
import {graphql, Query} from 'react-apollo';

//import components
import Back from './back'
import Refresh from './refresh'

//make query for activities
const getEventByLocoQuery = gql`
query($location:String!)
{
  getEventByLoco(location:$location){
    title
    start_time
    venue_name
    venue_address
    city_name
    region_abbr
    postal_code
    url
  }
}
`

class RandomEvent extends Component{

  state = {
    currentURL : '/RandomEvent',
    locationData: localStorage.getItem('inputLocation')
  }

  displayEvent(){

    return(
      <Query query={getEventByLocoQuery} variables={{location:this.state.locationData}}>
      {({ data, loading, error }) => {
        if (loading) return <h1>Loading...</h1>;
        if (error) return <h1>ERROR: {error.message}</h1>;

        return (
          <div>
          <h1>{data.getEventByLoco.title}</h1>
          <p>{data.getEventByLoco.start_time}</p>
          <p>Venue: {data.getEventByLoco.venue_name}</p>
          <p>Address: {data.getEventByLoco.venue_address}, {data.getEventByLoco.city_name}, {data.getEventByLoco.region_abbr} {data.getEventByLoco.postal_code}</p>
          <a href = {data.getEventByLoco.url}>Check it out!</a>
          <Refresh currentURL = {this.state.currentURL} />
          </div>
        );
      }}
      </Query>
    )}

    render(){

      console.log(this.props);
      return(
        <div id = 'RandomEvent'>
        <Back/>
        <h1>{this.displayEvent()}</h1>


        </div>
      )
    }
  }

  export default graphql(getEventByLocoQuery)

  //, {

  // options:(props) => {
  //   return{
  //     variables:
  //     {
  //       location:'14221'
  //     }
  //   }
  // }



  //})
  (RandomEvent);
