import React from 'react';
import banner from '../../images/slider-2-1-removebg-preview.png'
import background from '../../images/23964.jpg'
const Banner = () => {
    return (
        <div style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='' />
                <div className='text-center text-white'>
                    <h1 className="text-5xl font-bold">Sale For Auto Parts</h1>
                    <p className="py-6">Today the Auto Parts team is going to show you why you should buy used instead of a new parts. Our parts can and provides much better ride and handling.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;