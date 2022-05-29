import React, { useState } from 'react';
import useProducts from '../../hooks/useProducts';
import DeleteModal from './DeleteModal';
import ManageProductsRow from './ManageProductsRow';

const ManageProducts = () => {
    const [deletedProducts, setDeletedProducts] = useState(null);
    const [products, setProducts] = useProducts();

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
                                products={products}
                                setProducts={setProducts}
                                setDeletedProducts={setDeletedProducts}
                            ></ManageProductsRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletedProducts && <DeleteModal
                    deletedProducts={deletedProducts}
                    setDeletedProducts={setDeletedProducts}
                    products={products}
                    setProducts={setProducts}
                ></DeleteModal>
            }
        </div>
    );
};

export default ManageProducts;