import React from 'react';
import useProducts from '../../hooks/useProducts';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [products] = useProducts();

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <ManageProductsRow
                                key={product._id}
                                product={product}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;