import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Products from './Products';
import Transport from './Transport';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Transport></Transport>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;