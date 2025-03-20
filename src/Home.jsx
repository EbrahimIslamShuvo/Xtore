import React from 'react';
import UpNav from './Component/UpNav';
import MainNav from './Component/MainNav';
import SearchSection from './Component/SearchSection';
import Hero from './Component/Hero';
import CategoryCardShow from './Component/CategoryCardShow';
import OfferOne from './Component/OfferOne';
import FeatureProduct from './Component/FeatureProduct';
import FourStepBuyProduct from './Component/FourStepBuyProduct';
import ProductShow from './Component/ProductShow';
import Brand from './Component/Brand';
import Service from './Component/Service';
import Footer from './Component/Footer';

const Home = () => {
    return (
        <div>
            <UpNav></UpNav>
            <MainNav></MainNav>
            <SearchSection></SearchSection>
            <Hero></Hero>
            <CategoryCardShow></CategoryCardShow>
            <OfferOne></OfferOne>
            <FeatureProduct></FeatureProduct>
            <FourStepBuyProduct></FourStepBuyProduct>
            <ProductShow></ProductShow>
            <Brand></Brand>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;