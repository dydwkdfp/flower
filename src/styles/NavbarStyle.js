import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    padding: 10px 50px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items:center;
    position:sticky;
    top:0;

    background:#000;

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
    color: ${({themeColor})=> (themeColor ? '#E1B795' : '#B3AEFF')};
    font-family: 'WindSong', sans-serif;
    display: flex;
    justify-self: flex-start;
    cursor:pointer;
    align-items: center;
    font-weight: 500;
    text-decoration:none;
    font-size: 40px;
    
`

export const NavbarMenuContainer = styled.div`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

`

export const NavbarHomeMenu = styled(LinkR)`
    color: ${({themeColor})=> (themeColor ? '#E1B795' : '#B3AEFF')};
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 300;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

`
export const NavbarMenu = styled(LinkR)`
    color: #fff;
    font-family: 'Poppins', sans-serif;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-weight: 200;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

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
    background: ${({themeColor})=> (themeColor ? '#E1B795' : '#B3AEFF')};
    width:30px;
    height:30px;
    margin: 0 7px;
`

export const NavbarMobileIcon = styled.div`
    color: #fff;
    align-items: center;
    justify-content: center;
    transition: all 0.5s;
    padding-top: 4px;

    &:hover {
            transform: rotateX(180deg);
      }
    
`