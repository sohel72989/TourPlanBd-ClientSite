import React from 'react';
import './WhyChosse.css';

const WhyChoose = () => {
    return (
        <div className="bg-color">
            <div className="container py-5 ">
                <h1 className="pb-5 text-center text-secondary">Reasons why we're widely favourite</h1>
                <div className="row">
                    <div className="col-md-4 px-5">
                        <h3 className="text-color">Work with Hearts</h3>
                        <p>We care for your Travel with great mission & understanding so that you can have the best Scene.</p>
                    </div>
                    <div className="col-md-4 px-5">
                        <h3 className="text-color">Available Security</h3>
                        <p>The tour is high secure for the tourist police’ faces as they any problem?we create an atmosphere that feels comfortable..</p>
                    </div>
                    <div className="col-md-4 px-5">
                        <h3 className="text-color">Expert Monitoring</h3>
                        <p>We provide The expertis journals in monitoring and guid for members.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;