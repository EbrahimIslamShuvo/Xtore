import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { TfiShoppingCart } from "react-icons/tfi";
import { FaRegHeart } from "react-icons/fa";
import { BiSolidDownArrow } from "react-icons/bi";

const MainNav = () => {
    return (
        <div className=''>
            <div className="flex justify-between w-10/12 mx-auto py-3">
                <div className="">
                    <img className='w-7/12' src="/src/assets/logo.png" alt="" />
                </div>
                <div className="flex items-center gap-5 font-semibold">
                    <p className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center">Home<IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm font-normal">
                            <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                            <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                        </ul>
                    </p>
                    <p className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center">Feature<IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm font-normal">
                            <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                            <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                        </ul>
                    </p>
                    <p>Shop</p>
                    <p>Blog</p>
                    <p className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="flex items-center">Pages<IoIosArrowDown /></div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm font-normal">
                            <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                            <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                        </ul>
                    </p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="flex items-center gap-5 ">
                    <div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="flex items-center text-sm">ENG<BiSolidDownArrow className='text-[10px]' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm">
                                <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                                <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="flex text-sm items-center">USD<BiSolidDownArrow className='text-[10px]' /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm">
                                <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                                <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown dropdown-hover">
                            <div tabIndex={0} role="button" className="text-2xl hover:text-[#06B88F] mt-1"><CgProfile /></div>
                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm">
                                <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                                <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <FaRegHeart className='text-2xl hover:text-[#06B88F]' />
                    </div>

                    <div className="indicator">
                        <span className="indicator-item badge badge-secondary badge-sm px-1 py-0.5 bg-[#06B88F] border-0 text-[8px]">12</span>
                        <div>
                            <div className="dropdown dropdown-hover dropdown-end">
                                <div tabIndex={0} role="button" className="text-2xl hover:text-[#06B88F]"><TfiShoppingCart /></div>
                                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max py-3 px-10 shadow-sm">
                                    No Item Added
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainNav;