import React,{useEffect} from 'react';
import {GalleryData} from '../data/GalleryData';
import { GalleryContainer,GalleryWrapper,GalleryItemWrapper,
GalleryTitle,GalleryItems, GalleryItemTitle, GalleryTitleWrapper,
GallerySubtitle, GalleryItemImage, GalleryItemTitleWraper } from '../styles/GalleryStyle';

const GalleryItemDisplay = ({items}) =>{
    return(
        <>
    {items.map((item, index)=> {
        return(
            <GalleryItemWrapper to={'/Product/'+item.category}>
            <GalleryItemImage src={item.image}/>
            <GalleryItemTitleWraper>
                <GalleryItemTitle>
                    {item.category}
                </GalleryItemTitle>
            </GalleryItemTitleWraper>
            </GalleryItemWrapper>
        )
    })}
    </>
    )
}

const Gallery = (props) => {
    return (
        <GalleryContainer>
            <GalleryWrapper>
                <GalleryTitleWrapper  themeColor={props.themeColor}>
                    <GalleryTitle>
                        Modern
                    </GalleryTitle>
                    <GallerySubtitle>
                        PHOTO GALLERY
                    </GallerySubtitle>
                </GalleryTitleWrapper>

                <GalleryItems>
                    <GalleryItemDisplay items={GalleryData}/>
                </GalleryItems>
            </GalleryWrapper>
        </GalleryContainer>
    )
}

export default Gallery
