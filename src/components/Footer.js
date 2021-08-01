import React from 'react'
import { FooterContainer, FooterContent, FooterCopyright,
FooterCopyrightContent, FooterItems, FooterTitle, FooterWrapper, FooterGap} from '../styles/FooterStyle'

const Footer = (props) => {
    return (
        <FooterContainer>
            <FooterGap themeColor={props.themeColor}/>
            <FooterWrapper>
                <FooterItems>
                    <FooterTitle>
                        About Us
                    </FooterTitle>
                    <FooterContent>
                        this is a reactive page
                        that was designed
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
