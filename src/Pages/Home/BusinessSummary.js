import React from 'react';
import customer from '../../images/icon/customers-58.png'
import revenue from '../../images/icon/revenue-64.png'
import review from '../../images/icon/reviews-64.png'
import tolls from '../../images/icon/parts-64.png'
const BusinessSummary = () => {
    return (
        <div className='flex justify-center flex-col mb-20'>
            <div>
                <h1 className='text-primary text-4xl text-center mb-6 hover:underline-offset-4'>MILLIONS BUSINESS TRUST US</h1>

            </div>
            <div className="stats stats-vertical lg:stats-horizontal md:stats-horizontal shadow text">
                <div className="stat place-items-center">
                    <div><img className='' src={customer} alt="" /></div>
                    <div className="stat-title text-secondary">Happy Customers</div>
                    <div className="stat-value">80K+</div>
                </div>

                <div className="stat place-items-center">
                    <div><img src={revenue} alt="" /></div>
                    <div className="stat-title text-secondary">Annual Revenue</div>
                    <div className="stat-value">30K+</div>
                </div>

                <div className="stat place-items-center">
                    <div><img src={review} alt="" /></div>
                    <div className="stat-title text-secondary">Reviews</div>
                    <div className="stat-value">40K+</div>
                </div>
                <div className="stat place-items-center">
                    <div><img src={tolls} alt="" /></div>
                    <div className="stat-title text-secondary">Tools</div>
                    <div className="stat-value">50k+</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;