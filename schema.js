const { GraphQLObjectType, 
    GraphQLString,
    GraphQLInt, 
    GraphQLList, 
    GraphQLSchema }  = require('graphql');

const axios = require('axios');
 
// People
const PeopleType = new GraphQLObjectType({
    name: 'People',
    fields: () => ({
        name : { type: GraphQLString },
        height : { type: GraphQLString },
        mass : { type: GraphQLString },
        gender : { type: GraphQLString },
        homeworld : { type: GraphQLString }
    })
});

//root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        people: {
            type: new GraphQLList(PeopleType),
            resolve(parent, args) {
                return axios.get('https://swapi.dev/api/people')
                .then(res => res.data.results);
            }
        },
        person: {
            type: new GraphQLList(PeopleType),
            args: {
                name: { type: GraphQLString }
            },
            resolve(parent, args) {
                return axios.get(`https://swapi.dev/api/people/?search=${args.name}`)
                .then(res => res.data.results);
            }
        },
        peoplePage: {
            type: new GraphQLList(PeopleType),
            args: {
                page: { type: GraphQLInt }
            },
            resolve(parent, args) {
                return axios.get(`https://swapi.dev/api/people/?page=${args.page}`)
                .then(res => res.data.results);
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});