const { ApolloServer, gql } = require('apollo-server');
const typeDefs= require('./trueschema');
const resolvers= require('./resolvers');
const boredapi = require('./datasources/bored');
const eventfulapi = require('./datasources/eventful');
const cors = require('cors');




const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    boredapi: new boredapi(),
    eventfulapi: new eventfulapi()

  })
});

// navigator.geolocation.getCurrentPosition(success,failure);
// function success (position){
//   var lat = position.coords.latitude;
// }
// allow cross origin requests
//server.use(cors());

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);

});
