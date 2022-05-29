import React from 'react';

const ManageProductsRow = ({ product }) => {
    const { name, img, price, availableQuantity
    } = product;
    return (
        <tr>
            <th>
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={img} alt="" />
                    </div>
                </div>
            </th>
            <th>{name}</th>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <button className='btn btn-xs btn-error tiny text-white'>Delete</button>
            </td>
        </tr>
    );
};

export default ManageProductsRow;