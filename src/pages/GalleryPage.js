import React from 'react'
import Navbar from '../components/Navbar';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

const GalleryPage = (props) => {
    return (
        <>
            <Navbar themeColor={props.themeColor} getColorValue={props.getColorValue}/>
            <Gallery themeColor={props.themeColor}/>
            <Footer themeColor={props.themeColor}/>
        </>
    )
}

export default GalleryPage
