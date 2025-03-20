import React from 'react';

const FourStepBuyProduct = () => {
    return (
        <div className='related border-y-1 border-gray-300 py-10 w-10/12 mx-auto my-10'>
            <img className='absolute w-10/12 -z-20' src="https://cdn.shopify.com/oxygen-v2/32559/21434/44377/1498188/assets/VectorHIW-B1rTfOGT.svg" alt="" />
            <div className="flex justify-between w-12/12 mx-auto">
                <div className="flex flex-col items-center text-center gap-7 w-3/12 mx-auto">
                    <div className="">
                        <img className='w-25' src="/src/assets/step1.avif" alt="" />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className='bg-[#FDEAF4] w-max px-2 rounded-4xl text-[#AD174D] text-[10px]'>Step 1</p>
                        <h4 className='font-semibold text-lg'>Filter & Discover</h4>
                        <p className='text-gray-400 text-sm w-9/12'>Smart filtering and suggestions make it easy to find.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-7 w-3/12 mx-auto">
                    <div className="">
                        <img className='w-25' src="/src/assets/step2.avif" alt="" />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className='bg-[#EDFAD7] text-[#3F621E] w-max px-2 rounded-4xl text-[10px]'>Step 2</p>
                        <h4 className='font-semibold text-lg'>Add to Bag</h4>
                        <p className='text-gray-400 text-sm w-9/12'>Easily select the correct items and add them to the cart.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-7 w-3/12 mx-auto">
                    <div className="">
                        <img className='w-25' src="/src/assets/step3.avif" alt="" />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className='bg-[#FDE3E3] text-[#991B35] w-max px-2 rounded-4xl text-[10px]'>Step 3</p>
                        <h4 className='font-semibold text-lg'>Fast shipping</h4>
                        <p className='text-gray-400 text-sm w-9/12'>The carrier will confirm and ship quickly to you.</p>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-7 w-3/12 mx-auto">
                    <div className="">
                        <img className='w-25' src="/src/assets/step4.avif" alt="" />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <p className='bg-[#DCF4F2] text-[#315E59] w-max px-2 rounded-4xl text-[10px]'>Step 4</p>
                        <h4 className='font-semibold text-lg'>Enjoy the product</h4>
                        <p className='text-gray-400 text-sm w-9/12'>Have fun and enjoy your 5-star quality products.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FourStepBuyProduct;