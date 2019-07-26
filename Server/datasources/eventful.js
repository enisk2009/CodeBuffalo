const { RESTDataSource } = require('apollo-datasource-rest');

class eventfulapi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://api.eventful.com/json/events/search/list?';
  }

// apollo datasource function to load random events. Uses async/await and this.get which is a apollo dataSources
// function that makes a http GET request to an API
    async getEventByLoco(location){

      const response = await this.get('/', {
          app_key : 'ks6jPD4LcBQFKWr7',
          location : location,
          within : '25'
    });

    //Number of objects in JSON returned from API
    var size = JSON.parse(response).events.event.length;

    //creates a random number to load a random event
    var index = Math.floor(Math.random()*size);
    console.log(index, size);

    //parses the response by random events using index(which is random)
    return JSON.parse(response).events.event[index];
  }
}

module.exports = eventfulapi;
