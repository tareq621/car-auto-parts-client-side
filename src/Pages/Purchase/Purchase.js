import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';


const Purchase = () => {
    const [user, loading] = useAuthState(auth);
    const { purchaseId } = useParams();
    const [purchase, setPurchase] = useState({});   

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${purchaseId}`)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [purchaseId])

    if (loading) {
        return <Loading></Loading>
    }
    const handleOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            service: user.name,
            address: event.target.address.value,
            phone: event.target.phone.value,
            productName: event.target.productName.value,
            quantity: event.target.quantity.value
        };
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your order is booked!!!')
                    event.target.reset();
                }
            })



        axios.post('http://localhost:5000/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!')
                    event.target.reset();
                }
            })
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleOrder} className='card-body '>
                        <h2 className='text-3xl text-primary text-center font-semibold'>Place Order</h2>

                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='name' value={user?.displayName} className="input input-bordered w-full max-w-xs" readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="email" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='address' placeholder="Address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="text" name='productName' placeholder="Product Name" value={purchase.name} className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <input type="number" name='quantity' placeholder="quantity" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <input type="submit" value="Order" className="btn btn-outline text-primary" />

                    </form>
                </div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <img className='w-96 rounded-lg' src={purchase.img} alt="" />
                        <div>
                            <h2 className='text-3xl mb-4'>{purchase.name}</h2>
                            <p className='text-sm font-bold mb-1'>Price:<span className='text-primary'>${purchase.price}</span></p>
                            <p className='text-sm font-bold mb-1'>Min. order: <span className='text-primary'>{purchase.orderQuantity}</span> Pieces</p>
                            <p className='text-sm font-bold w-96 mb-1'>In stock now: <span className='text-primary'>{purchase.availableQuantity} </span>Pieces</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Purchase;