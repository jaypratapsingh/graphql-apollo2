import {gql, ApolloServer} from 'apollo-server-express';
import resolvers from './resolver';

var typeDefs = gql`
    type Student {
        name: String,
        age: Int
    }

    type Query {
        student: [Student],
        singleStudent(age: Int): Student
    }
`

const schema = new ApolloServer({typeDefs, resolvers});

export default schema;

