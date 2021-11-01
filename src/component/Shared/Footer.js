import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer-bg py-5">
                <div className="container text-white">
                    <div className="text-center">
                        <h1 className="text-info">TourPlan BD</h1>
                        <p>Be designed and classified scientifically, courses are suitable to every levels, ensuring to maximize student’s capacity. You will find out many interesting things inside. Let’s discover right now!</p>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-4">
                            <h3 className="text-info">Contact Info</h3>
                            <p><span className="fas fa-map-marker-alt"></span> Bangladesh tourism guide.<br />
                                Plot: 52(6th floor), Block : C, Rd No. 11, Dhaka 1213</p>
                            <p><i className="fas fa-phone-alt"></i> (+884) 388-999-888</p>
                            <p><i className="fa fa-envelope" aria-hidden="true"></i> rana72989@gmail.com</p>

                        </div>
                        <div className="col-md-4 text-center">
                            <h3 className="text-info">About Us</h3>
                            <a className="fa fa-facebook-square  text-decoration-none text-white p-2 mt-3" aria-hidden="true" href="https://www.facebook.com/rana72989">
                            </a>
                            <a className="fa fa-twitter-square  text-decoration-none text-white p-2" aria-hidden="true" href="https://twitter.com/rana72989">
                            </a>
                            <a className="fa fa-linkedin-square  text-decoration-none text-white p-2" aria-hidden="true" href="https://www.linkedin.com/in/sohel-rana-916966147/">
                            </a>

                        </div>
                        <div className=" col col-md-4">
                            <h3 className="text-info">Terms & Conditions</h3>
                            <div>
                                <a className="text-decoration-none text-white ms-3" href="#link">Payment Method</a>
                            </div>
                            <div>
                                <a className="text-decoration-none text-white m-3" href="#link">Booking & Cancellation Policy</a>
                            </div>

                        </div>
                        <hr />
                        <div className="row text-center">
                            <div className="col">
                                <h5 className="text-white-50">Copyright 2021 &copy; <span className="text-info">TourPlan BD</span></h5>
                                <p className="text-white-50">Design By: <a className="text-white-50 text-decoration-none" href="https://www.facebook.com/rana72989">Sohel Rana</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;