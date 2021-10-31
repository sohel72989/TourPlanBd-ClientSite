import React from 'react';
import Footer from '../Shared/Footer';
import Header from '../Shared/Header';
import Banner from './Banner';
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
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;