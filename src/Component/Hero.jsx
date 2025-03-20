import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="carousel w-full my-3">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="bg-[#E2FFE5] w-full flex">
                        <div className="w-10/12 mx-auto flex justify-between">
                            <div className="flex flex-col justify-center h-full items-start w-7/12">
                                <h4 className='font-semibold'>In this season, find the best 🔥</h4>
                                <h1 className='mb-8 text-6xl font-bold'>Exclusive collection
                                    for everyone</h1>
                                <button className='bg-black text-white py-2 px-4 rounded-4xl border-2 hover:border-black hover:bg-transparent hover:text-black'>Explore Now</button>
                            </div>
                            <div className="flex justify-center">
                                <img className='w-10/12 h-auto' src="/src/assets/s1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                <div className="bg-[#E2FFE5] w-full flex">
                        <div className="w-10/12 mx-auto flex justify-between">
                            <div className="flex flex-col justify-center h-full items-start w-7/12">
                                <h4 className='font-semibold'>In this season, find the best 🔥</h4>
                                <h1 className='mb-8 text-6xl font-bold'>Exclusive collection
                                    for everyone</h1>
                                <button className='bg-black text-white py-2 px-4 rounded-4xl border-2 hover:border-black hover:bg-transparent hover:text-black'>Explore Now</button>
                            </div>
                            <div className="flex justify-center">
                                <img className='w-10/12 h-auto' src="/src/assets/s2.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                <div className="bg-[#E2FFE5] w-full flex">
                        <div className="w-10/12 mx-auto flex justify-between">
                            <div className="flex flex-col justify-center h-full items-start w-7/12">
                                <h4 className='font-semibold'>In this season, find the best 🔥</h4>
                                <h1 className='mb-8 text-6xl font-bold'>Exclusive collection
                                    for everyone</h1>
                                <button className='bg-black text-white py-2 px-4 rounded-4xl border-2 hover:border-black hover:bg-transparent hover:text-black'>Explore Now</button>
                            </div>
                            <div className="flex justify-center">
                                <img className='w-10/12 h-auto' src="/src/assets/s3.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Hero;