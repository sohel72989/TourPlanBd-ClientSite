import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Package from './Package';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-atoll-15464.herokuapp.com/package')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="text-center pb-4">
                    <h1 className="text-secondary">Package Available</h1>
                    <p>The reputation of the Hospital is the result of quality clinical outcome and comprehensive care, made achievable through world class integrated healthcare facilities by highly trained professionals. Thus, the Hospitals strives to meet patients’ standards through quality healthcare and making a difference in their lives.</p>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        packages.map(packag => <Package
                            key={packages.id}
                            package={packag}
                        ></Package>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Packages;