import styled from 'styled-components';

export const ContactContainer = styled.div`
    width:100vw;
    background: #E1B795;
`
export const ContactWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 150px 0;
`
export const ContactTitle = styled.h1`
    color: #fff;
    font-size: 70px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;

    @media screen and (max-width:1280px){
        font-size: 60px;
    }
`
export const Contactsubtitle = styled.p`
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
export const ContactTextWrapper = styled.div`
    background:#fff;
    color:#E1B795;
    border-radius: 10px;
    width: 40vw;
    height: 80px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 10px 0;

    @media screen and (max-width:800px){
        width: 50vw;
    }
    @media screen and (max-width:640px){
        width: 60vw;
    }

`

export const ContactText = styled.text`
    font-size: 24px;
    font-family: 'Poppins', sans-serif;
    font-align: left;

    @media screen and (max-width:1280px){
        font-size: 20px;
    }
    @media screen and (max-width:800px){
            font-size: 18px;
    }
    @media screen and (max-width:640px){
    font-size: 16px;
    }
`