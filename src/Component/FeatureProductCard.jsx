import React from 'react';
import { IoCart } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";

const FeatureProductCard = ({ featureProduct }) => {
    return (
        <div className="group">
            <div className="group-hover:drop-shadow-2xl rounded-2xl  duration-700 group-hover:bg-white w-50 h-70 py-5 flex flex-col items-center relative">
                <div className="relative">
                    <img
                        className="w-40 h-40 rounded-2xl p-2"
                        src={featureProduct.image}
                        alt={featureProduct.name}
                    />
                    <div className="absolute rounded-xl inset-0 bg-black  duration-700 opacity-0 group-hover:opacity-75 -z-0 flex items-start justify-end text-white p-3">
                        <div className="flex flex-col gap-2">
                            <IoCart className='hover:bg-[#06b88ff9] p-0.5 text-2xl rounded-full'/>
                            <FaRegHeart className='hover:bg-[#06b88ff9] p-0.5 text-2xl rounded-full' />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-3">
                    <h4>{featureProduct.name}</h4>
                    <p className="flex items-center justify-center">{featureProduct.rating}★ Rating</p>
                    {featureProduct.discount_price === 0 ? (
                        <p className='text-[#FF5959]'>${featureProduct.price}</p>
                    ) : (
                        <p className='text-[#FF5959]'>
                            <del className="text-gray-400 text-sm mr-1">${featureProduct.price}</del>
                            ${featureProduct.discount_price}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FeatureProductCard;
