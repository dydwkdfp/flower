import { ViewCarousel } from '@material-ui/icons'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const MainPage = () => {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <Gallery/>
        <Footer/>
        </>
    
    )
}

export default MainPage
