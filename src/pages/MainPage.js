import { ViewCarousel } from '@material-ui/icons'
import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';
import Introduction from '../components/Introduction';

const MainPage = (props) => {
    return (
        <>
        <Navbar themeColor={props.themeColor} getColorValue={props.getColorValue}/>
        <Carousel themeColor={props.themeColor}/>
        <Introduction themeColor={props.themeColor}/>
        <Gallery themeColor={props.themeColor}/>
        <Footer themeColor={props.themeColor}/>
        </>
    
    )
}

export default MainPage
