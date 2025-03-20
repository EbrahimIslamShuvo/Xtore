import React from 'react';

const CategoryCardShow = () => {
    return (
        <div>
            <div className="w-10/12 mx-auto mt-8">
                <div className="">
                    <p className='text-4xl font-bold mb-4'>Top Catagory</p>
                </div>
                <div className="flex gap-10">
                    <div className="carousel carousel-center bg-white rounded-box w-12/12 space-x-4 p-4 mx-auto">
                        <div className="carousel-item">
                            <div className="w-[200px]">
                                <div className="bg-gradient-to-t from-[#F6A9C9] hover:from-[#ffffff] via-[#ffffff] to-[#ffffff] w-max rounded-2xl border-3 border-white duration-700 hover:border-[#F6A9C9]">
                                    <img className='w-[200px] h-[200px]' src="/src/assets/c1.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-center mt-2 text-xl font-semibold text-[#F559A8]'>Beauty</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="w-[200px]">
                                <div className="bg-gradient-to-t from-[#8F939D] hover:from-[#ffffff] via-[#ffffff] to-[#ffffff] w-max rounded-2xl border-3 border-white duration-700 hover:border-[#8F939D]">
                                    <img className='w-[200px] h-[200px]' src="/src/assets/c2.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-center mt-2 text-xl font-semibold text-[#8F939D]'>Furniture</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="w-[200px]">
                                <div className="bg-gradient-to-t from-[#C26760] hover:from-[#ffffff] via-[#ffffff] to-[#ffffff] w-max rounded-2xl border-3 border-white duration-700 hover:border-[#C26760]">
                                    <img className='w-[200px] h-[200px]' src="/src/assets/c3.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-center mt-2 text-xl font-semibold text-[#C26760]'>Sound</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="w-[200px]">
                                <div className="bg-gradient-to-t from-[#FFE5E4] hover:from-[#ffffff] via-[#ffffff] to-[#ffffff] w-max rounded-2xl border-3 border-white duration-700 hover:border-[#FFE5E4]">
                                    <img className='w-[200px] h-[200px]' src="/src/assets/c4.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-center mt-2 text-xl font-semibold text-[#FB9ACA]'>Phone</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="w-[200px]">
                                <div className="bg-gradient-to-t from-[#E6B13D] hover:from-[#ffffff] via-[#ffffff] to-[#ffffff] w-max rounded-2xl border-3 border-white duration-700 hover:border-[#E6B13D]">
                                    <img className='w-[200px] h-[200px]' src="/src/assets/c5.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-center mt-2 text-xl font-semibold text-[#E6B13D]'>Begs</p>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="w-[200px]">
                                <div className="bg-gradient-to-t from-[#A1D071] hover:from-[#ffffff] via-[#ffffff] to-[#ffffff] w-max rounded-2xl border-3 border-white duration-700 hover:border-[#A1D071]">
                                    <img className='w-[200px] h-[200px]' src="/src/assets/c6.png" alt="" />
                                </div>
                                <div className="">
                                    <p className='text-center mt-2 text-xl font-semibold text-[#A1D071]'>Kitchen</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CategoryCardShow;