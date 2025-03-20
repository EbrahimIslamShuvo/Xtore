import React from 'react';
import { BiSolidDownArrow } from 'react-icons/bi';

const SearchSection = () => {
    return (
        <div className=" flex items-center gap-10 bg-black w-max rounded-4xl px-0.5 mx-auto mt-1">
            <div>
                <div className="dropdown dropdown-center dropdown-hover">
                    <div tabIndex={0} role="button" className="flex text-sm items-center font-semibold border-3 rounded-4xl py-2 px-10 bg-white">Category<BiSolidDownArrow className='text-[10px]' /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-max p-2 shadow-sm">
                        <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 1</a></li>
                        <li><a className='bg-transparent hover:border border-[#06B88F] px-3 py-0.5 text-center mx-auto'>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div>
                <label className="flex border-3 w-max  rounded-4xl bg-white">
                    <div className="flex items-center pl-3 gap-2 border-0 bg-transparent">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                        <input type="search" className="grow py-2" placeholder="Search" />
                    </div>
                    <div className="">
                        <button className='bg-[#06B88F] rounded-r-4xl py-2 px-4 mr-[0.5px] font-semibold hover:bg-[#06b88fd4]'>Search</button>
                    </div>
                </label>
            </div>
        </div>
    );
};

export default SearchSection;