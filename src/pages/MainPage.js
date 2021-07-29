import { ViewCarousel } from '@material-ui/icons'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';

const MainPage = () => {
    return (
        <>
        <Navbar/>
        <Carousel/>
        <Introduction/>
        <Gallery/>
        <Footer/>
        </>
    
    )
}

export default MainPage
