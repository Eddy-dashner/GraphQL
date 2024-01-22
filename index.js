import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";


//types
import { typeDefs } from "./schema";
//server step 
const server = new ApolloServer({
    typeDefs
    //resolvers 
})

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log(' Server ready at por', 4000)