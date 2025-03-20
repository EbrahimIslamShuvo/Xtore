import React, { useEffect, useState } from 'react';
import ProductShowCategory from './ProductShowCategory';
import ProductShowCard from './ProductShowCard';

const ProductShow = () => {
    const [products, setProduct] = useState([])
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    const [selectCategory, setSelectCategory] = useState(null)
    let filterCategoryName = (filterCategoryName)=>{
        setSelectCategory(filterCategoryName);
    }
    console.log(selectCategory);
    let filterProduct;
    if(selectCategory === "all"){
        filterProduct = products;
    }
    else{
        filterProduct = selectCategory ? products.filter(product => product.category === selectCategory) : (products)
    }

    return (
        <div className='bg-[#FDFAEC]'>
            <div className="w-10/12 mx-auto p-5">
                <div>
                    <h1 className='text-4xl font-bold mb-4'>Explore Products</h1>
                </div>
                <div className="flex justify-between gap-8">
                    <div className="w-3/12">
                        <ProductShowCategory filterCategoryName={filterCategoryName} />
                    </div>
                    <div className="w-8/12">
                        <div className="carousel carousel-center bg-white rounded-box w-full h-max space-x-4 p-6">
                            <div className="carousel-item">
                                {
                                    filterProduct.map(product => (
                                        <ProductShowCard featureProduct={product} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductShow;
