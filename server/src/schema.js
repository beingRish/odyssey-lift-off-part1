const gql = require("graphql-tag");

const typeDefs = gql`
"A track is a group of Modules that teahes about a specific topic"

  type Query {
    tracksForHome: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track"

  type Author {
    id: ID!
    name: String!
    photo: String!
  }
`;

module.exports = typeDefs;