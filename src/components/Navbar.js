import React,{useState} from 'react';
import {NavbarContainer, NavbarLogo,
NavbarMenu, NavbarMenuContainer,
NavbarSettingIcon, NavbarSettings,
 NavbarPC,NavbarMobileIcon, NavbarMobile, NavbarHomeMenu, Menustyle} from '../styles/NavbarStyle';
 import MenuIcon from '@material-ui/icons/Menu';
 import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
 import {Link as LinkR} from 'react-router-dom';


const Navbar = () => {
    const [ThemeColor,setThemeColor] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    
    const changeColorGold = () =>{
        setThemeColor(true);
    }
    const changeColorBlue = () =>{
        setThemeColor(false);
    }
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavbarContainer>
                <NavbarPC>
                <NavbarLogo themeColor={ThemeColor} to="/Main">
                    Flower
                </NavbarLogo>
                <NavbarMenuContainer>
                    <NavbarHomeMenu themeColor={ThemeColor} to="/Main">
                        Home
                    </NavbarHomeMenu>
                    <NavbarMenu themeColor={ThemeColor} to="/Gallery">
                        Gallery
                    </NavbarMenu>
                    <NavbarMenu themeColor={ThemeColor} to="/Contact">
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
                <NavbarMobileIcon themeColor={ThemeColor} >
                    <MenuIcon color="inherit" onClick={handleClick}/>
                    <Menustyle>
                    <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} >
                        <MenuItem>
                            <LinkR to="/Main">
                            Home
                            </LinkR>
                        </MenuItem>
                        <MenuItem>
                            <LinkR to="/Gallery">
                            Gallery
                            </LinkR>
                        </MenuItem>
                        <MenuItem>
                            <LinkR to="/Contact">
                            Contact
                            </LinkR>
                        </MenuItem>
                    </Menu>
                    </Menustyle>
                </NavbarMobileIcon>
                </NavbarMobile>
        </NavbarContainer>
    )
}

export default Navbar
