import React from 'react';
import { NavLink } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    const { _id, name, img, description, duration } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card p-2">
                    <img src={img} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold text">{name}</h5>
                        <p className="card-text "><small id="text-color">{duration}</small></p>
                        <p className="card-text">{description}</p>
                        <NavLink to={`/home/${_id}`} className="btn btn-color py-2 px-5">Check Details</NavLink>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;