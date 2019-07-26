const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    activity: Activity
    activitybykey(key: String): Activity
    getActivityByPriceRange(min:Float, max: Float): Activity
    getEventByLoco(location:String): Event
  }

  type Activity {
    activity: String,
    accessibility: Float,
    type: String,
    participants: Int,
    price: Float,
    link: String,
    key: String,
  }

  type Event {
    title:String,
    start_time:String,
    venue_name:String,
    venue_address:String,
    city_name:String,
    region_abbr:String,
    postal_code:String,
    url:String
  }

  `;

module.exports = typeDefs;
