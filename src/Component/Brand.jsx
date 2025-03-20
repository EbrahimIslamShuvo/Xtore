import React from 'react';

const Brand = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto my-10">
                <div className="">
                    <h1 className='text-4xl font-bold mb-4'>Featured Brands</h1>
                </div>
                <div className="flex justify-between">
                    <img className="w-35 border-2 rounded-xl border-white hover:border-[#06B88F]" src="/src/assets/ban1.jpg" alt="" />
                    <img className="w-35 border-2 rounded-xl border-white hover:border-[#06B88F]" src="/src/assets/ban2.jpg" alt="" />
                    <img className="w-35 border-2 rounded-xl border-white hover:border-[#06B88F]" src="/src/assets/ban3.jpg" alt="" />
                    <img className="w-35 border-2 rounded-xl border-white hover:border-[#06B88F]" src="/src/assets/ban4.jpg" alt="" />
                    <img className="w-35 border-2 rounded-xl border-white hover:border-[#06B88F]" src="/src/assets/ban5.jpg" alt="" />
                    <img className="w-35 border-2 rounded-xl border-white hover:border-[#06B88F]" src="/src/assets/ban6.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Brand;