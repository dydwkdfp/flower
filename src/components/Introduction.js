import React from 'react'
import { IntroContainer, IntroWrapper, IntroRow,
Column1, Column2, Heading, Subtitle, TextWrapper,
ImgWrap, Img, textContent } from '../styles/IntroductionStyle'

const Introduction = () => {
    return (
        <IntroContainer>
            <IntroWrapper>
                <IntroRow>
                    <Column1>
                        <ImgWrap>
                            <Img src={require('../images/flowerIntro.jpg').default}>
                            
                            </Img>
                        </ImgWrap>
                    </Column1>
                    <Column2>
                        <TextWrapper>
                            <Heading>
                                Services
                            </Heading>
                            <Subtitle>
                                What we do
                            </Subtitle>
                            <textContent>
                                I guess I'm trying to get a job as front-end developer. Which is really difficult
                                If i don't have any experiences before.
                            </textContent>
                        </TextWrapper>
                    </Column2>
                </IntroRow>
            </IntroWrapper>
        </IntroContainer>
    )
}

export default Introduction
