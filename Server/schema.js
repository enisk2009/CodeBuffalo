const graphql = require('graphql');
const apollo = require('apollo-server');

const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLFloat,
  GraphQLInt,
} = graphql;

const fetch = require('node-fetch');

const BASE_URL = 'https://www.boredapi.com/api/activity'
const KEY_SEARCH = 'http://www.boredapi.com/api/activity?key='

function getActivity(){
  return fetch(`${BASE_URL}`).then(res => res.json());
}



/*function getActivityByKey(key){
  return fetch(`${KEY_SEARCH}${key}`).then(res => res.json());
}
*/
/*
const ActivityType = new GraphQLObjectType({
name: 'Activity',
description: ',,,',

fields: () => ({
  activity: {type: GraphQLString},
  accessibility: {type: GraphQLFloat},
  type: {type: GraphQLString},
  participants: {type: GraphQLInt},
  price: {type: GraphQLFloat},
  link: {type: GraphQLString},
  key: {type: GraphQLString},
})
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'The root of all... queries',
  fields: () => ({
    activity: {
      type: ActivityType,
      args: {
        key: { type: GraphQLString },
      },
      resolve: (root, args) => getActivity(),
    },
  }),
});
*/
module.exports = new GraphQLSchema({
query: QueryType,
});
