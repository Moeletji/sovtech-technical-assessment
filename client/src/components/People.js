import React, { useEffect, useState } from 'react';
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

const PEOPLEPAGE_QUERY = gql`
    query PeoplePageQuery($page: Int) {
        peoplePage(page: $page) {
            name
            mass
            gender
            height
            homeworld
        }
    }
`;

const People = () => {

    const [page, setPage] = useState(1);

    return (
        <>
            <h1 className="display-4 my-3">People</h1>
            {
                page > 1 ? (
                    <Query query={PEOPLEPAGE_QUERY}  variables={{page}} >
                        {
                            ({loading, error, data}) => {
                                if (loading) return <h4>Loading...</h4>;
                                if (error) console.log(error);
                                console.log(data);
                                return <>
                                    {
                                        data.peoplePage.map(person => (
                                            <PeopleItem key={person.name} person={person} />
                                        ))
                                    }
                                </>;
                            }
                        }
                    </Query>
                ) : (
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
                )
            }
            
            <div>
                <strong>Select page number: </strong><input type="number" onChange={(event) => {
                    setPage(parseInt(event.target.value));
                }}/>
            </div>    
        </>
    )
};

export default People;
