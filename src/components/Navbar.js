import React,{useState} from 'react';
import {NavbarContainer, NavbarLogo,
NavbarMenu, NavbarMenuContainer,
NavbarSettingIcon, NavbarSettings,
 NavbarPC,NavbarMobileIcon, NavbarMobile, NavbarHomeMenu} from '../styles/NavbarStyle';
 import MenuIcon from '@material-ui/icons/Menu';

const Navbar = () => {
    const [ThemeColor,setThemeColor]=useState(false);

    const changeColorGold = () =>{
        setThemeColor(true);
    }
    const changeColorBlue = () =>{
        setThemeColor(false);
    }

    return (
        <NavbarContainer>
                <NavbarPC>
                <NavbarLogo themeColor={ThemeColor} to="/MainPage">
                    Flower
                </NavbarLogo>
                <NavbarMenuContainer>
                    <NavbarHomeMenu themeColor={ThemeColor} to="/MainPage">
                        Home
                    </NavbarHomeMenu>
                    <NavbarMenu to="/Gallery">
                        Gallery
                    </NavbarMenu>
                    <NavbarMenu to="/Contact">
                        Contact
                    </NavbarMenu>
                </NavbarMenuContainer>
                <NavbarSettings>
                    <NavbarSettingIcon themeColor={true} onClick={changeColorGold}/>
                    <NavbarSettingIcon themeColor={false} onClick={changeColorBlue}/>
                </NavbarSettings>
                </NavbarPC>
                <NavbarMobile>
                <NavbarLogo themeColor={ThemeColor}>
                    Flower
                </NavbarLogo>
                <NavbarMobileIcon>
                    <MenuIcon color="inherit"/>
                </NavbarMobileIcon>
                </NavbarMobile>
        </NavbarContainer>
    )
}

export default Navbar
