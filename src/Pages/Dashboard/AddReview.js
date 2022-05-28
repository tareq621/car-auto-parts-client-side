import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const url = `https://guarded-brook-34447.herokuapp.com/review`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success('Add Review successfully', data);
                }
                else {
                    toast.error('Failed now add review')
                }
            })

    };

    return (
        <div>
            <form className='ml-28' onSubmit={handleSubmit(onSubmit)}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        {...register("name", { required: true })}
                        className="input input-bordered w-full max-w-xs" required />
                </div>

                <div className="form-control w-28 max-w-xs">
                    <label className="label">
                        <span className="label-text">Rate</span>
                    </label>
                    <select
                        {...register("ratings", { required: true })}
                        className="select select-bordered">
                        <option disabled selected>Rating</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Review</span>
                    </label>
                    <textarea
                        {...register("review", { required: true, maxLength: 200 })}
                        className="textarea textarea-bordered h-24 w-full max-w-xs" placeholder="Bio"></textarea>
                </div>
                <div className='flex justify-start mt-3'>
                    <input type="submit" value="Add Review" className="btn btn-outline btn-primary ml-18" />
                </div>
            </form>

        </div>
    );
};

export default AddReview;