import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100vw;
    height: 250px;
    background:#303030;
`
export const FooterWrapper = styled.div`
    display:flex;
    justify-content:flex;
    align-items:flex;
    margin: 0 40px;
    width:100%;
    height:90%;
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

`
export const FooterCopyright = styled.div`
    background:#151515;
    height:10%;
    display:flex;
    justify-content:center;
    align-items:center;

`
export const FooterCopyrightContent = styled.p`
    font-size:10px;
    color:#fff;
    font-family: 'WindSong', cursive;
`