import styled from 'styled-components'

export const IntroContainer = styled.div`
    background: ${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
    padding: 50px 50px;
    
    @media screen and (max-width: 1280px){
        padding: 40px 40px;
    }
    @media screen and (max-width: 800px){
        padding: 30px 30px;
    }
    @media screen and (max-width: 640px){
        padding: 20px 20px;
    }
`

export const IntroWrapper = styled.div`
    display: grid;
    width: 100%;
    max-width: 1100px;
    justify-content: center;
`

export const IntroRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 800px){
        grid-template-areas: 'col1 col1' 'col2 col2';
    }
`

export const Column1 = styled.div`
    grid-area: col2;
`

export const Column2 = styled.div`
    grid-area: col1;
`

export const TextWrapper = styled.div`
    display: flex;
    align-items:flex-end;
    flex-direction:column;
    margin-right: 50px;
    max-width: 500px;
    text-align:right;

    @media screen and (max-width: 800px){  
        margin-right: 0px;
        max-width: 550px;
        align-items:center;
        margin-bottom: 50px;
        margin-top: 30px;
        text-align:center;
    }
`

export const ImgWrap = styled.div`
    max-width: 550px;
    height: 100%
`

export const Heading = styled.h1`
    margin-top: 20px;
    color:#fff;
    font-size: 70px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 60px;
    }
`

export const Subtitle = styled.p`
    margin-top: -5px;
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
export const textContent = styled.text`
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 16px;
    }
    @media screen and (max-width:800px){
            font-size: 14px;
            text-align:center;
    }
    @media screen and (max-width:640px){
       font-size: 12px;
    }

    

`

export const Img = styled.img`
    width: 100%;
    margin-right:30px;
`