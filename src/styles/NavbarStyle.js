import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    z-index:2;
    padding: 10px 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items:center;
    position:sticky;
    top:0;
    transition: top 0.2s ease-in-out;
    background:#fff;


    @media screen and (max-width:800px){
        padding: 0 50px;
    }
`

export const NavbarMobile = styled.div`
    display:none;

    @media screen and (max-width:800px){
        align-items: center;
        display: flex;
        justify-content: space-between;
        width: 100%;
        max-width: 1080px;
    }
`

export const NavbarPC = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width:800px;

    @media screen and (max-width:800px){
        display:none;
    }
`

export const NavbarLogo = styled(LinkR)`
    color:${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    font-family: 'WindSong', sans-serif;
    display: flex;
    justify-self: flex-start;
    cursor:pointer;
    align-items: center;
    font-weight: 500;
    text-decoration:none;
    font-size: 40px;
    transition: all 1s;
    
    &:hover{
        color: ${({themeColor})=> (themeColor ? '#E1B795' : '#B3AEFF')};
    }
`

export const NavbarMenuContainer = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

`

export const NavbarHomeMenu = styled(LinkR)`
    color:${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 300;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 1s;

    &:hover{
        color: ${({themeColor})=> (themeColor ? '#E1B795' : '#B3AEFF')};
    }


`
export const NavbarMenu = styled(LinkR)`
    color: #000;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 200;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover{
        color:${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    }

`

export const NavbarSettings = styled.div`
    display: flex;
    justify-self: flex-end;
    cursor:pointer;
    align-items: center;
    font-weight: bold;
    text-decoration:none;

`

export const NavbarSettingIcon = styled.div`
    background: ${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    width:30px;
    height:30px;
    margin: 0 7px;
`

export const NavbarMobileIcon = styled.div`
    color:${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    padding-top: 4px;

    &:hover {
            transform: rotateX(180deg);
      }
    
`