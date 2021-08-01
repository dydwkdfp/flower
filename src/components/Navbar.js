import React,{useState} from 'react';
import {NavbarContainer, NavbarLogo,
NavbarMenu, NavbarMenuContainer,
NavbarSettingIcon, NavbarSettings,
 NavbarPC,NavbarMobileIcon, NavbarMobile, NavbarHomeMenu} from '../styles/NavbarStyle';
 import MenuIcon from '@material-ui/icons/Menu';
 import Menu from '@material-ui/core/Menu';
 import MenuItem from '@material-ui/core/MenuItem';
 import {Link as LinkR} from 'react-router-dom';


const Navbar = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    
    const sendColorGold = () =>{
        props.getColorValue(true);
    }
    const sendColorBlue = () =>{
        props.getColorValue(false);
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
                <NavbarLogo themeColor={props.themeColor} to="/Main">
                    Flower
                </NavbarLogo>
                <NavbarMenuContainer>
                    <NavbarHomeMenu themeColor={props.themeColor} to="/Main">
                        Home
                    </NavbarHomeMenu>
                    <NavbarMenu themeColor={props.themeColor} to="/Gallery">
                        Gallery
                    </NavbarMenu>
                    <NavbarMenu themeColor={props.themeColor} to="/Contact">
                        Contact
                    </NavbarMenu>
                </NavbarMenuContainer>
                <NavbarSettings>
                    <NavbarSettingIcon themeColor={true} onClick={sendColorGold}/>
                    <NavbarSettingIcon themeColor={false} onClick={sendColorBlue}/>
                </NavbarSettings>
                </NavbarPC>
                <NavbarMobile>
                <NavbarLogo themeColor={props.themeColor}>
                    Flower
                </NavbarLogo>
                <NavbarMobileIcon themeColor={props.themeColor} >
                    <MenuIcon color="inherit" onClick={handleClick}/>
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
                </NavbarMobileIcon>
                </NavbarMobile>
        </NavbarContainer>
    )
}

export default Navbar
