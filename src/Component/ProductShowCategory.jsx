import React, { useEffect, useState } from 'react';
import { FaArrowRight } from "react-icons/fa";

const ProductShowCategory = ({filterCategoryName}) => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('Category.json')
            .then(res => res.json())
            .then(data => setCategories(data));
    }, []);

    return (
        <div className="p-4 pl-0">
            <div className="">
                <div
                    key={300} onClick={()=>filterCategoryName("all")}
                    className="bg-white mb-1.5 flex items-center justify-between rounded-xl py-2 px-3 hover:bg-[#06B88F] hover:text-white cursor-pointer transition-all duration-300 text-black"
                >
                    <span>All</span>
                    <FaArrowRight className="text-xl" />
                </div>
                <div>
                    {categories.map((category) => (
                        <div
                            key={category.id}  onClick={()=>filterCategoryName(category.name)}
                            className="bg-white mb-1.5 flex items-center justify-between rounded-xl py-2 px-3 hover:bg-[#06B88F] hover:text-white cursor-pointer transition-all duration-300"
                        >
                            <span>{category.name}</span>
                            <FaArrowRight className="text-xl" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductShowCategory;
