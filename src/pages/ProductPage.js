import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';

const ProductPage = (props) => {
    return (
        <>
        <Navbar themeColor={props.themeColor} getColorValue={props.getColorValue}/>
        <Product type={props.type} Data={props.Data}  themeColor={props.themeColor}/>
        <Footer  themeColor={props.themeColor}/>
        </>
    )
}

export default ProductPage
