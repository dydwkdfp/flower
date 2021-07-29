import React from 'react'
import { FooterContainer, FooterContent, FooterCopyright,
FooterCopyrightContent, FooterItems, FooterTitle, FooterWrapper, } from '../styles/FooterStyle'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterItems>
                    <FooterTitle>
                        About Us
                    </FooterTitle>
                    <FooterContent>
                        this is a reactive page{<br/>}
                        that was designed{<br/>}
                        for portfolio purposes
                    </FooterContent>
                </FooterItems>
                <FooterItems>
                    <FooterTitle>
                        Contact
                    </FooterTitle>
                    <FooterContent>
                        codingjaemin@gmail.com
                    </FooterContent>
                </FooterItems>
            </FooterWrapper>
            <FooterCopyright>
                <FooterCopyrightContent>
                    Copyright CodingJaemin
                </FooterCopyrightContent>
            </FooterCopyright>
        </FooterContainer>
    )
}

export default Footer
