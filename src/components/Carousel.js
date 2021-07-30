import { Hidden } from '@material-ui/core';
import React,{useState} from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {ImageData} from '../data/sliderdata.js';
import {CarouselContainer, CarouselWrapper, CarouselContent,CarouselImage,
     CarouselbackArrow, CarouselfrontArrow, CarouselTextWrapper,
     CarouselTitle, CarouselComment} from '../styles/CarouselStyle';
import { AnimatePresence, motion } from 'framer-motion';




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

    const imgvariants = {
        initial:{opacity: 0},
        animate:{opacity: 1},
    };
    const variants = {
        initial:{y:250},
        animate:{y:0},
        animate:{y:0, transition:{duration:2,delay:0.2, type: 'spring', stiffness:120}},
    };
    const contentvariants = {
        initial:{y:250},
        animate:{y:0, transition:{duration:2,delay:0.4, type: 'spring', stiffness:40}},
    };

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
                            <AnimatePresence>
                            <motion.div variants={imgvariants} initial="initial" animate={index===current ? "animate" : "initial"}>
                            {index === current && (<CarouselImage src={slide.image}/>)}
                            </motion.div>
                            <CarouselTextWrapper>
                            <motion.div variants={variants} initial="initial" animate={index===current ? "animate" : "initial"}>
                            {index === current && (<CarouselTitle>{slide.Title}</CarouselTitle>)}
                            </motion.div>
                            <motion.div variants={contentvariants} initial="initial" animate={index===current ? "animate" : "initial"}>
                            {index === current && (<CarouselComment>{slide.Content}</CarouselComment>)}
                            </motion.div>
                            </CarouselTextWrapper>
                            </AnimatePresence>
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
