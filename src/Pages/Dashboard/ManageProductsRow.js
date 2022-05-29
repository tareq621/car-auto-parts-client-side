import React from 'react';
import { toast } from 'react-toastify';

const ManageProductsRow = ({ product, setDeletedProducts }) => {
    const { _id, name, img, price, availableQuantity
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
                <label onClick={() => setDeletedProducts(product)} for="my-modal-6" class="btn btn-xs btn-error tiny text-white">Delete</label>
            </td>
        </tr>
    );
};

export default ManageProductsRow;