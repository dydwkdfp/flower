import styled from 'styled-components';

export const CarouselContainer = styled.div`
    background: #010606;   
`

export const CarouselWrapper = styled.div`
    justify-content: center;
    align-items: center;
    display:flex;
`

export const CarouselContent = styled.div`
    width:100vw;
    height:400px;
    justify-content: center;
    align-items: center;
    display:flex;
    overflow:hidden;

    position:relative;

    @media screen and (max-width:800px){
        height:350px;
    }

    @media screen and (max-width:640px){
        height:200px;
    }

`

export const CarouselImage = styled.img`
    width:100%;
`

export const CarouselbackArrow = styled.div`
    position: absolute;
    top:50%;
    left:10%;
    transform:translate(-50%,-50%);
    color:#fff;
`

export const CarouselfrontArrow = styled.div`
    position: absolute;
    color:#fff;
    top:50%;
    right:10%;
    transform:translate(-50%,-50%);

`
export const CarouselTextWrapper = styled.div`
    position: absolute;
    color:#fff;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

`

export const CarouselTitle = styled.h1`
    Fontsize
`
export const CarouselComment = styled.h1`

`