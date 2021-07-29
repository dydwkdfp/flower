import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const GalleryContainer = styled.div`
`
export const GalleryWrapper = styled.div`
    width:100vw;
    justify-content: center;
    align-items: center;
    display:flex;
    max-width:100%;
    flex-direction:column;

`
export const GalleryTitleWrapper = styled.div`
    background: ${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    width:100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

    @media screen and (max-width:800px){
        height: 100px;
    }

`
export const GalleryTitle = styled.h1`
    margin-top: 20px;
    color:#fff;
    font-size: 70px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 60px;
    }
`
export const GallerySubtitle = styled.div`
    margin-top: -5px;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight:800;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 35px;
    }
    @media screen and (max-width:800px){
        font-size: 25px;
    }
    @media screen and (max-width:640px){
        font-size: 20px;
    }

`
export const GalleryItems = styled.div`
    max-width:100%;
    display:flex;
    align-items: center;
    justify-content: space-evenly;

`
export const GalleryItemWrapper = styled(LinkR)`
    text-decoration:none;
    max-width:25%;
    width:25vw;
    transition: filter 1s;
    
    &:hover{
        filter:brightness(120%);
    }
`
export const GalleryItemTitle = styled.text`
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 16px;
    }
    @media screen and (max-width:800px){
        font-size: 14px;
    }
    @media screen and (max-width:640px){
       font-size: 12px;
    }


`
export const GalleryItemImage = styled.img`
    width:100%;

`
export const GalleryItemTitleWraper = styled.div`
    color:#000;
    margin-top: -4px;
    width:100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({themeColor})=> (themeColor ? 'rgba(179,174,255,0.2)' : 'rgba(225,183,149,0.2)')};


`