import styled from 'styled-components';

export const CarouselContainer = styled.div`
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
    filter: brightness(70%);
`

export const CarouselbackArrow = styled.div`
    position: absolute;
    top:50%;
    left:5%;
    transform:translate(-50%,-50%);
    color:#fff;
    z-index:1;
    transition: all 0.5s;

    &:hover{
        cursor:pointer;
    }
`

export const CarouselfrontArrow = styled.div`
    position: absolute;
    color:#fff;
    top:50%;
    right:5%;
    transform:translate(-50%,-50%);
    z-index:1;
    transition: all 0.5s;

    
    &:hover{
        cursor:pointer;
    }
`
export const CarouselTextWrapper = styled.div`
    position: absolute;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:#fff;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);

`

export const CarouselTitle = styled.h1`
    color: ${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    font-size: 70px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 60px;
    }
`
export const CarouselComment = styled.p`
    margin-top: -10px;
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight:800;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 35px;
    }
    @media screen and (max-width:800px){
        font-size: 25px;
    }
    @media screen and (max-width:640px){
        font-size: 20px;
    }
`