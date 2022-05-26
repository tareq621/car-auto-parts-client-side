import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const AddParts = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast.success('New Parts Add successfully', result);
            })
    };

    return (
        <div className='mt-5'>
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className='flex '>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Product Name"
                            className="input input-bordered w-3/6 max-w-xl"
                            {...register("productName", {
                                required: {
                                    value: true,
                                    message: 'Product is required'
                                }
                            })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="price"
                            className="input input-bordered w-3/6 max-w-xl"
                            {...register("price", {
                                required: {
                                    value: true,
                                    message: 'Price is required'
                                }
                            })}
                        />

                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Available quantity"
                            className="input input-bordered w-3/6 max-w-xl"
                            {...register("availableQuantity", {
                                required: {
                                    value: true,
                                    message: 'Quantity is required'
                                }
                            })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Minimum Order</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Min. Order"
                            className="input input-bordered w-3/6 max-w-xl"
                            {...register("minimumOrder", {
                                required: {
                                    value: true,
                                    message: 'quantity is required'
                                }
                            })}
                        />

                    </div>
                </div>
                <div className='flex'>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            placeholder="URL"
                            className="input input-bordered w-3/6 max-w-xl"
                            {...register("img", {
                                required: {
                                    value: true,
                                    message: 'URL is required'
                                }
                            })}
                        />

                    </div>
                    <div className="form-control w-full max-w-xl">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <textarea
                            type="text"
                            placeholder="text area"
                            className="input input-bordered w-3/6 max-w-xl"
                            {...register("description", {
                                required: {
                                    value: 100,
                                    message: 'Description is required'
                                }
                            })}
                        />

                    </div>
                </div>
                <div className='flex justify-center mr-72'>
                    <button type='submit' className="btn btn-outline btn-primary hover:text-white">ADD PARTS</button>
                </div>
            </form>
        </div>
    );
};

export default AddParts;