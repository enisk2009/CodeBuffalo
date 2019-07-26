const { RESTDataSource } = require('apollo-datasource-rest');

class boredapi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://www.boredapi.com/api/';
  }
  async getActivity() {
    const response = await this.get('activity');
    return response;
  }
  async getActivityByKey(key) {
    const response = await this.get('activity?key=', {key});
    return response;
  }

  async getActivityByPriceRange(min,max){
    const response = await this.get(`activity?minprice=${min}&maxprice=${max}`, {min,max});
    return response;
  }
}

module.exports = boredapi;
