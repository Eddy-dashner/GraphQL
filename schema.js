export const typeDefs = `#graphql
type Game {
    id: ID!
    title: String!
    platform: [String!]!
}
type Review {
    id: ID!
    rating: int!
    content: String!
}
type Author {
    id: ID!
    name: String!
    verified: Boolean!
}

type Querry{
    reviews: [Review]
    games: [Game]
    authors:[Author]
}

`
// types: int, float, string, boolean, ID' 
