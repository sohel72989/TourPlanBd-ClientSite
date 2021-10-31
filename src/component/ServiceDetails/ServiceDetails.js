import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import './ServiceDetails'

const ServiceDetails = () => {

    const { id } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const details = services.find(service => service.id === parseInt(id));
    console.log(details)
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="pb-5">
                    <h1 className="text-secondary">We are here to help when you need us</h1>
                    <p>By helping with daily activities, our caregivers enable clients to maintain their normal daily routines. Hourly home care allows clients to use our caregivers on an hourly or as-needed basis. Surrounded by their possessions, pets, and a familiar environment, our clients receive the support they need to enjoy their regular activities and continue living well at home.</p>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <img src={details?.img} className="img-fluid h-100" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div className="py-3">
                            <h1 className="text">{details?.name}</h1>
                            <p>Package No. {id}</p>
                        </div>
                        <h5>Package Name: <span className="text-success">{details?.package}</span></h5>
                        <h6>Duration: {details?.duration}</h6>

                        <p>Fee: ${details?.price}</p><br />
                        <h6>Details:</h6>
                        <p>{details?.description}</p>
                        <button className="btn btn-color mt-3 py-3 px-5 btn">Booking Now</button>
                        <NavLink to={'/home'} className=" border mt-3 py-3 px-5 btn ms-3">Back</NavLink>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;