import React from 'react';

const Service = () => {
    return (
        <div>
            <div className="bg-[#F7F7F7]">
                <div className="p-5 flex justify-between w-10/12 mx-auto gap-5">
                    <div className="flex justify-center items-center w-3/12 hover:bg-white rounded-xl">
                        <div className="">
                            <img className='w-15' src="/src/assets/ser1.png" alt="" />
                        </div>
                        <div className="">
                            <h4 className='text-lg font-semibold'>Free Shopping</h4>
                            <p className='text-sm '>On order over $49.99</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-3/12 hover:bg-white rounded-xl">
                        <div className="">
                            <img className='w-15' src="/src/assets/ser2.png" alt="" />
                        </div>
                        <div className="">
                            <h4 className='text-lg font-semibold'>Money Back</h4>
                            <p className='text-sm '>30 Days money back</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-3/12 hover:bg-white rounded-xl">
                        <div className="">
                            <img className='w-15' src="/src/assets/ser3.png" alt="" />
                        </div>
                        <div className="">
                            <h4 className='text-lg font-semibold'>Online Support</h4>
                            <p className='text-sm '>Support online 24/7</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center w-3/12 hover:bg-white rounded-xl">
                        <div className="">
                            <img className='w-15' src="/src/assets/ser4.png" alt="" />
                        </div>
                        <div className="">
                            <h4 className='text-lg font-semibold'>Gift Promotion</h4>
                            <p className='text-sm '>On order over $99.99</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;