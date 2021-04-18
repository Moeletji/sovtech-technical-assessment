import React from 'react'
import { Link } from 'react-router-dom';
import IPerson from '../model/Person';

const PeopleItem: React.FC<any> = (props:{person: IPerson }) => {
   
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Person: {props.person.name} </h4>
                </div>
                <div className="col-md-3">
                    <Link to={`/person/${props.person.name}`} className="btn btn-secondary">Details</Link>
                </div>
            </div>
        </div>
    )
}

export default PeopleItem
