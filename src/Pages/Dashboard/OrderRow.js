import React from 'react';

const OrderRow = ({ order }) => {
    const { productName, phone, address, quantity } = order;
    return (
        <tr>
            <th>1</th>
            <th>{productName}</th>
            <th>{address}</th>
            <th>{phone}</th>
            <th>{quantity}</th>
            <td>
                <button className="btn btn-xs">Cancel</button>
            </td>
        </tr>
    );
};

export default OrderRow;