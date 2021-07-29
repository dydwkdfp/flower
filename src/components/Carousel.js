import { Hidden } from '@material-ui/core';
import React,{useState} from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {ImageData} from '../data/sliderdata.js';
import {CarouselContainer, CarouselWrapper, CarouselContent,CarouselImage,
     CarouselbackArrow, CarouselfrontArrow, CarouselTextWrapper,
     CarouselTitle, CarouselComment} from '../styles/CarouselStyle';




const ImageSlider = ({slides}) => {
    const[current, setcurrent] = useState(0)
    const length = slides.length

    const nextSlide = () =>{
        setcurrent(current === length-1 ? 0 : current +1)
    }
    const prevSlide = () =>{
        setcurrent(current === 0 ? length-1 : current-1)
    }

    if(!Array.isArray(slides) || slides.length <=0){
        return null;
    }else{

    }

    return (
        <section className="slider">
            <CarouselbackArrow>
            <ArrowBackIosIcon color='inherit' onClick={prevSlide}/>
            </CarouselbackArrow>
            <CarouselfrontArrow>
            <ArrowForwardIosIcon color='inherit' onClick={nextSlide}/>
            </CarouselfrontArrow>
            {slides.map((slide, index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<CarouselImage src={slide.image}/>)}
                            <CarouselTextWrapper>
                            {index === current && (<CarouselTitle>{slide.Title}</CarouselTitle>)}
                            {index === current && (<CarouselComment>{slide.Content}</CarouselComment>)}
                            </CarouselTextWrapper>
                            
                        </div>
                    )
                })
            }
        </section>
    )
}

const Carousel = () => {
    return (
        <CarouselContainer>
            <CarouselWrapper>
                <CarouselContent>
                    <ImageSlider slides={ImageData}/>
                </CarouselContent>
            </CarouselWrapper>
        </CarouselContainer>
    )
}

export default Carousel
