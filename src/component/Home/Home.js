import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
import Features from './Features';
import Partners from './Partners';
import Services from './Services';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Services></Services>
            <WhyChoose></WhyChoose>
            <Features></Features>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;