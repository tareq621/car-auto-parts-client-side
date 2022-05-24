import React from 'react';

const Product = ({ product }) => {
    const { name, img, price, availableQuantity, orderQuantity, description } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body pt-2">
                <div className='flex justify-between'>
                    <h4 className='text-xl font-bold'>{name}</h4>
                    <h6 className='text-md text-primary font-bold'>Per Price <span className='text-primary'>${price}</span></h6>
                </div>
                <div className=''>
                    <p className='text-sm font-bold'>Min. order: <span className='text-primary'>{orderQuantity}</span> Pieces</p>
                    <p className='text-sm font-bold pt-1'>In stock now: <span className='text-primary'>{availableQuantity} </span>Pieces</p>
                </div>
                <p>{description}</p>
                <div className='mt-2'>
                    <button className="btn btn-primary hover:text-white">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;