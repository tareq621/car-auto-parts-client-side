import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import ContactUs from './ContactUs';
import Products from './Products';
import Transport from './Transport';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Transport></Transport>
            <BusinessSummary></BusinessSummary>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;