import React from 'react';

const ManageAllOrderRow = ({ allOrder }) => {
    const { productName, address, phone, quantity } = allOrder
    return (
        <tr>
            <th>1</th>
            <th>{productName}</th>
            <th>{address}</th>
            <th>{phone}</th>
            <th>{quantity}</th>
            <th>
                <button className='btn btn-xs tiny text-white'>Update</button>
            </th>
        </tr>
    );
};

export default ManageAllOrderRow;