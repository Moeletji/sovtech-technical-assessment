import React from 'react'
import { Link } from 'react-router-dom';

const PeopleItem = ({ person: { name, mass, height, gender, homeworld}}) => {

    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Person: {name} </h4>
                </div>
                <div className="col-md-3">
                    <Link to={`/person/${name}`} className="btn btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default PeopleItem
