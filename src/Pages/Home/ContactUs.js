import React from 'react';
import contact from '../../images/contact.jpg'

const ContactUs = () => {
    return (
        <section className='text-center' style={{ background: `url(${contact})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: '1300px' }}>
            <div>
                <div>
                    <h3 className='text-3xl mt-5 text-white font-semibold'>Contact Us</h3>
                    <h2 className='text-3xl text-white'>Stay connected with us</h2>
                </div>
                <div className='mt-5'>
                    <input className='my-3 rounded-lg px-4 w-80 border-0 py-2' type="email" placeholder='Email Address' name="" id="" /> <br />
                    <input className='my-3 rounded-lg px-4 w-80 border-0 py-2' type="text" placeholder='Phone number' name="" id="" /> <br />
                    <input className='my-3 rounded-lg px-4 w-80 border-0 py-2' type="text" placeholder='Subject' name="" id="" /> <br />
                    <textarea className='w-80 h-32 rounded-lg my-3 px-4 py-2' placeholder='Your message' name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;