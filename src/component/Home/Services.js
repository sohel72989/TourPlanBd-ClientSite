import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/package')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    return (
        <div className="container py-5">
            <div className="text-center pb-4">
                <h1 className="text-secondary">Popular Packages</h1>
                <p className="text-success">On This Tour, after visiting the place in whole day, you'll enjoying traditional scenery in the evening.</p>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;