const typeDefs = 
   `type Contract {
        address: String!,
        balance: Int
   }

   type Query {
     contract: Contract
     # List of all tokens available for swap
     tokens: [Token]!
     # Returns route for swap between any pair of tokens
     route(input: RouteInput!): Route!
     # Privide execution status for specific route
     status(id: ID!): SwapStatus!
    }

    type Mutation {
     swap(input: SwapInput!): SwapStatus!
    }

    type RouteInput {
     # Takes in User input for
     fromToken: ID!
     toToken: ID!
    }

    type SwapInput {
     route: ID!
     signature: String!
    }

    type Token {
     # Gives info of Token
     id: ID!
     name: String!
     symbol: String!
     price: Float!
    }

    type Route {
     id: ID!
     path: [Token]!
    
     # Signable payload
     data: String!
    }

    type SwapStatus {
     route: Route!
     status: [PairSwapStatus]!
    }

    type PairSwapStatus {
     fromToken: Token!
     toToken: Token!
     status: SwapStatusValue
    }

    enum SwapStatusValue {
     NEW
     PENDING
     COMPLETED
     FAILED
    }
`;
module.exports = typeDefs;