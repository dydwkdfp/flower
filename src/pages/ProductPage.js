import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';

const ProductPage = ({type, Data}) => {
    return (
        <>
        <Navbar/>
        <Product type={type} Data={Data}/>
        <Footer/>
        </>
    )
}

export default ProductPage
