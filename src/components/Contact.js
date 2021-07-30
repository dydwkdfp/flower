import React from 'react';
import { ContactContainer, ContactWrapper,
ContactTitle, ContactText, Contactsubtitle, ContactTextWrapper } from '../styles/ContactStyle';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import CallIcon from '@material-ui/icons/Call';


const Contact = () => {
    return (
        <ContactContainer>
            <ContactWrapper>
                <ContactTitle>
                    Contact
                </ContactTitle>
                <Contactsubtitle>
                    How to reach us
                </Contactsubtitle>
                <ContactTextWrapper>
                <ContactText>
                    <MailOutlineIcon fontSize="inherit"/> codingjaemin@gmail.com
                </ContactText>
                </ContactTextWrapper>
                <ContactTextWrapper>
                <ContactText>
                    <CallIcon fontSize="inherit" /> +82 (0)10-2640-0563
                </ContactText>
                </ContactTextWrapper>
            </ContactWrapper>
        </ContactContainer>
    )
}

export default Contact
