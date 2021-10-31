import React from 'react';
import Header from '../Shared/Header';
import Footer from '../Shared/Footer';
import img22 from '../../img/partner//IMG2222.jpg'
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div>
            <Header></Header>
            <div className="container py-5">
                <div className="text-center text-secondary pb-5">
                    <h1>ABOUT TourPlan Bd</h1>
                    <p>TourPlan PROFILE & HISTORY</p>
                </div>
                <div className="row text-dark p-3">
                    <div className="col-md-4">
                        <div className="pb-5">
                            <h5>ABOUT US</h5>
                            <p>The reputation Tour Operator is an award winning local tour operator & your travel solution in Bangladesh determined to provide a unique and satisfying travel experience. Our high qualified services, comfortable tour planning, guides with spacious knowledge of local information and the affordable price will make your trip enjoyable and special. If you want to explore Bangladesh completely rich, we are here with experiences to make it memorable.
                            </p>
                        </div>
                        <div>
                            <h5>OUR AIM & VISION</h5>
                            <p>Our aim is to make your stay in Bangladesh an unforgettable experience. We hope you will decide to ask us for help and we look forward to being at your service. We also invite to cooperation travel agencies from all over the world who wish to supply work with high-quality services in Bangladesh.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img src={img22} className="img-fluid h-100" alt="" />

                    </div>
                    <div className="col-md-4">
                        <div className="pb-5">
                            <h5>OUR AIM & VISION</h5>
                            <p>Our aim is to make your stay in Bangladesh an unforgettable experience. We hope you will decide to ask us for help and we look forward to being at your service. We also invite to cooperation travel agencies from all over the world who wish to supply work with high-quality services in Bangladesh.
                            </p>
                        </div>
                        <div>
                            <h5>OUR STRATEGY</h5>
                            <p>The reputation Tour Operator is an award winning local tour operator & your travel solution in Bangladesh determined to provide a unique and satisfying travel experience. Our high qualified services, comfortable tour planning, guides with spacious knowledge of local information and the affordable price will make your trip enjoyable and special. If you want to explore Bangladesh completely rich, we are here with experiences to make it memorable.</p>
                        </div>

                    </div>
                    <NavLink to={`/home`} className="border bg-info mt-3 py-3 px-5 btn ms-3">Back to Home</NavLink>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;