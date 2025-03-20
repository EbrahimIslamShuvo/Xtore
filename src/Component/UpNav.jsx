import React from 'react';
import CountDown from './CountDown';
import { FaArrowRight } from "react-icons/fa";

const UpNav = () => {
    return (
        <div>
            <div className="bg-[#06B88F] flex items-center justify-center text-white gap-4 py-1">
                <h1>Hurry Up, sale up to 50%</h1>
                <CountDown></CountDown>
                <div className="flex items-center gap-1 hover:border-b group">
                    <a className='' href="#">Explore More</a>
                    <FaArrowRight className='opacity-0 text-[10px] duration-700 group-hover:opacity-100' />
                </div>
            </div>
        </div>
    );
};

export default UpNav;