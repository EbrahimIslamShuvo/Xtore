import React, { useEffect, useState } from 'react';
import FeatureProductCard from './FeatureProductCard';

const FeatureProduct = () => {
    const [products,setProduct] = useState([])
    useEffect(()=>{
        fetch('Product.json')
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    const featureProducts = products.filter(product=> product.type === 'favourite')
    
    return (
        <div>
            <div className="w-10/12 mx-auto">
                <div className="">
                    <p className='text-4xl font-bold mb-4'>Feature Product</p>
                </div>
                <div className="flex justify-between items-center">
                    {
                        featureProducts.map(featureProduct =>(
                            <FeatureProductCard featureProduct={featureProduct}></FeatureProductCard>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FeatureProduct;