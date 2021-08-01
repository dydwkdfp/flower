import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 280px;
    background:#303030;
    max-width:100%;
`
export const FooterGap = styled.div`
    height:30px;
    width:100%;
    transition: all 1s;
    background: ${({themeColor})=> (themeColor ? '#B3AEFF' : '#E1B795')};
`
export const FooterWrapper = styled.div`
    display:flex;
    justify-content:flex;
    align-items:flex;
    margin: 0 40px;
    width:100%;
    height:225px;
`
export const FooterItems = styled.div`
    margin: 30px 30px;
    width:20vw;
    display:flex;
    align-items:center;
    justify-content:flex;
    flex-direction:column;
`
export const FooterTitle = styled.h1`
    font-size:15px;
    color:#fff;
    font-family: 'Poppins', sans-serif;
    font-weight:300;

    border-bottom: 2px solid #aaa;
`
export const FooterContent = styled.text`
    font-size:15px;
    color:#bbb;
    font-weight:300;
    font-family: 'Poppins', sans-serif;
    
    @media screen and (max-width:800px){
        font-size: 12px;
    }
    @media screen and (max-width:640px){
        font-size: 10px;
    }

`
export const FooterCopyright = styled.div`
    background:#151515;
    height:25px;
    display:flex;
    justify-content:center;
    align-items:center;

`
export const FooterCopyrightContent = styled.p`
    font-size:10px;
    color:#fff;
    font-family: 'WindSong', cursive;
`