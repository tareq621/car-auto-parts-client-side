import React from 'react';
import transport1 from '../../images/transport_1.jpg'
import transport2 from '../../images/transport_2.jpg'

const Transport = () => {
    return (
        <div className='my-20'>
            <div className="hero-content">
                <img className='w-2/4 rounded-lg' src={transport1} alt='' />
                <div className='ml-4 lg:text-left md:text-center sm:text-center'>
                    <h1 className="text-5xl font-semibold">Safe Packing</h1>
                    <p className="py-6">Finally, it is time to find suitable packing material to store your vehicle parts. Of course, it all depends on the size of your part.</p>
                    <button className="btn btn-outline border-primary border-2">Read More</button>
                </div>
            </div>
            <div>
                <div className="hero-content  lg:flex-row-reverse">
                    <img className='w-2/4 rounded-lg' src={transport2} alt='' />
                    <div className='text-right mr-4 lg:text-right md:text-center sm:text-center'>
                        <h1 className="text-5xl font-semibold flex-col lg:flex-row">Fastes Shipping</h1>
                        <p className="py-6">Auto parts get shipped all around the world, all of the time, and, generally, you can send them cheaply, easily and safely.</p>
                        <button className="btn btn-outline border-primary border-2">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transport;