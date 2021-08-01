import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const ContactPage = (props) => {
    return (
        <>
        <Navbar themeColor={props.themeColor} getColorValue={props.getColorValue}/>
        <Contact themeColor={props.themeColor}/>
        <Footer themeColor={props.themeColor}/>
        </>
    )
}

export default ContactPage
