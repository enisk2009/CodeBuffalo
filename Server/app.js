const { ApolloServer, gql } = require('apollo-server');
const typeDefs= require('./schema');
const resolvers= require('./resolvers');
const boredapi = require('./datasources/bored');
const eventfulapi = require('./datasources/eventful');





const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    boredapi: new boredapi(),
    eventfulapi: new eventfulapi()

  })
});


server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);

});
