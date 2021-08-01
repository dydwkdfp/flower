import React,{useEffect} from 'react'
import { IntroContainer, IntroWrapper, IntroRow,
Column1, Column2, Heading, Subtitle, TextWrapper,
ImgWrap, Img, textContent } from '../styles/IntroductionStyle'
import Aos from "aos";
import "aos/dist/aos.css";

const Introduction = (props) => {
    useEffect(()=> {
        Aos.init({duration:2000});
    })
    return (
        <IntroContainer themeColor={props.themeColor}>
            <IntroWrapper>
                <IntroRow>
                    <Column1>
                        <div data-aos="fade-left">
                        <ImgWrap>
                            <Img src={require('../images/flowerIntro.jpg').default}/>
                        </ImgWrap>
                        </div>
                    </Column1>
                    <Column2>
                    <div data-aos="fade-right">
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
                    </div>
                    </Column2>
                </IntroRow>
            </IntroWrapper>
        </IntroContainer>
    )
}

export default Introduction
