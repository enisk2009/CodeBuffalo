//libraries
import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

//components
import activity from './components/activity';
import home from './components/home';
import eventForm from './components/eventForm';
import RandomEvent from './components/randomEvent';



//apollo client setup, connects front end react, with back end node.js and graphql server
const client = new ApolloClient({
//  uri: "http://192.168.1.158:4000/"
uri: "http://localhost:4000/"
})


//root component class, homebase for all components and establishes routes
class App extends Component {

  render(){
  return (
<ApolloProvider client = {client}>
  <BrowserRouter>
    <div id = "main">
      <Route exact path = '/' component = {home}/>
      <Route path = '/activity' component = {activity}/>
      <Route path = '/eventForm' component = {eventForm}/>
      <Route path = '/randomEvent' component = {RandomEvent}/>
    </div>
 </BrowserRouter>
</ApolloProvider>

  );
}
}



//exports root component 'app' to be rendered in index.html
export default App;
