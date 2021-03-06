import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({ deletedProducts, setDeletedProducts, products, setProducts }) => {
    const { _id } = deletedProducts;

    const handleDelete = id => {
        fetch(`https://guarded-brook-34447.herokuapp.com/purchase/${id}`, {
            method: 'DELETE',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`

            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {

                    const remaining = products.filter(product => product._id !== id)

                    toast.success('Delete Successful product');
                    setDeletedProducts(null);
                    setProducts(remaining)
                }
                console.log(data);
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you wanna delete this?</h3>
                    <div className="modal-action">
                        <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error tiny text-white'>Delete</button>
                        <label for="my-modal-6" className="btn btn-xs tiny text-white">Cancel</label>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default DeleteModal;