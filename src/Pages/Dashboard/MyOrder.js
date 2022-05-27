import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import OrderRow from './OrderRow';

const MyOrder = () => {
    const [user, loading] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const { data } = await axios.get(url);
            setOrders(data);
        }
        getOrders()

    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-2xl">All users{orders.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>SL NO</th>
                            <th>Product Name</th>
                            <th>Cus name</th>
                            <th>Qty</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(user => <OrderRow
                                key={user._id}
                                user={user}
                            ></OrderRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;