import React from 'react';
import banner from '../../images/slider-2-1-removebg-preview.png'
import background from '../../images/23964.jpg'
const Banner = () => {
    return (
        <div style={{ background: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right' }} className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='' />
                <div className='text-center text-white'>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;