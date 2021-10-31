import React from 'react';
import partner1 from './../../img/partner/partner1.png';
import partner2 from './../../img/partner/partner2.png';
import partner4 from './../../img/partner/partner4.jpg';

const Partners = () => {
    return (
        <div className="text-center py-5">
            <h1 className="pb-5 text-secondary">Affiliate partners</h1>
            <img src={partner1} className="img-fluid" alt="" />
            <img src={partner2} className="img-fluid" alt="" />
            <img src={partner4} className="img-fluid" alt="" />
        </div>
    );
};

export default Partners;