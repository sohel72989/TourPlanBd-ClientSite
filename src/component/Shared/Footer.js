import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-bg py-5">
                <div className="container text-white">
                    <div className="text-center">
                        <h1 className="text-dark">TourPlan BD</h1>
                        <p>Be designed and classified scientifically, courses are suitable to every levels, ensuring to maximize student’s capacity. You will find out many interesting things inside. Let’s discover right now!</p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p><span className="fas fa-map-marker-alt"></span> Bangladesh tourism guid.<br />
                                Plot: 52(6th floor), Block : C, Rd No. 11, Dhaka 1213</p>
                            <p><i className="fas fa-phone-alt"></i> (+884) 388-999-888</p>

                        </div>
                        <div className="col-md-6">

                        </div>
                        <hr />
                        <div className="row text-center">
                            <div className="col">
                                <h5 className="text-white">Copyright 2021 &copy; <span className="text-dark">TourPlan BD</span></h5>
                                <p className="text-dark">Design By: <a className="text-warning" href="https://www.facebook.com/rana72989">Sohel Rana</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;