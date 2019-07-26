module.exports = {
  Query: {

    activity: (_, __, { dataSources }) =>
      dataSources.boredapi.getActivity(),

      activitybykey: (_, { key }, { dataSources }) =>
      dataSources.boredapi.getActivityByKey(key),

      getActivityByPriceRange: (_, { min,max }, { dataSources }) =>
      dataSources.boredapi.getActivityByPriceRange(min,max),

      getEventByLoco: (_, {location}, {dataSources}) =>
      dataSources.eventfulapi.getEventByLoco(location),
    }
}
