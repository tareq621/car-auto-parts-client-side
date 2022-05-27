import React from 'react';

const OrderRow = ({ user }) => {
    const { productName, name, address, quantity } = user;
    return (
        <tr className='active'>
            <th>1</th>
            <th>{productName}</th>
            <th>{name}</th>
            <th>{address}</th>
            <th>{quantity}</th>
            <td>
                <button class="btn btn-xs">Cancel</button>
            </td>
        </tr>
    );
};

export default OrderRow;