import React from 'react';
import { gql } from '@apollo/client';
import { Query } from 'react-apollo';
import PeopleItem from './PeopleItem';

const PEOPLE_QUERY = gql`
    query PeopleQuery {
        people {
            name
            mass
            gender
            height
            homeworld
        }
    }
`;

const People = () => {
    return (
        <>
            <h1 className="display-4 my-3">People</h1>
            <Query query={PEOPLE_QUERY}>
                {
                    ({loading, error, data}) => {
                        if (loading) return <h4>Loading...</h4>;
                        if (error) console.log(error);

                        return <>
                            {
                                data.people.map(person => (
                                    <PeopleItem key={person.name} person={person} />
                                ))
                            }
                        </>;
                    }
                }
            </Query>    
        </>
    )
};

export default People;
