import React from 'react';
import { toast } from 'react-toastify';

const OrderRow = ({ order, orders, setOrders }) => {
    const { productName, phone, address, quantity } = order;

    const handleDelete = id => {
        fetch(`https://guarded-brook-34447.herokuapp.com/order/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    const remaining = orders.filter(order => order._id !== id)
                    setOrders(remaining);
                    toast.success('Order cancel');
                }
            })
    }


    return (
        <tr>
            <th>1</th>
            <th>{productName}</th>
            <th>{address}</th>
            <th>{phone}</th>
            <th>{quantity}</th>
            <td>
                <button onClick={() => handleDelete(order._id)} className="btn btn-xs text-white">Cancel</button>
            </td>
        </tr>
    );
};

export default OrderRow;