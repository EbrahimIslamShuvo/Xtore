import React from 'react';

const OfferOne = () => {
    return (
        <div>
            <div className="flex justify-between w-11/12 mx-auto my-10">
                <div className="flex related rounded-2xl bg-[#A8F5FF] w-5/12 h-45 mx-auto">

                    <img src="/src/assets/b2.png" alt="" />

                    <div className="absolute ml-55 mt-7">
                        <h1 className='text-2xl font-bold w-8/12'>Best Casual Summer Outfits</h1>
                        <h4 className='text-gray-500 text-sm mb-3'>Great Quality with comfort</h4>
                        <button className='bg-[#3BCBF0] text-white font-semibold px-2 rounded-xl'>SHOP NOW</button>
                    </div>
                </div>
                <div className="flex related rounded-2xl bg-[#FCC5DA] w-5/12 h-45 mx-auto">

                    <img src="/src/assets/b1.png" alt="" />

                    <div className="absolute ml-55 mt-7">
                        <h1 className='text-2xl font-bold w-8/12'>Xiomi Redmi Note 15 pro max</h1>
                        <h4 className='text-gray-500 text-sm mb-3'>Great Quality with 10000MPh</h4>
                        <button className='bg-[#D77C9F] text-white font-semibold px-2 rounded-xl'>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferOne;