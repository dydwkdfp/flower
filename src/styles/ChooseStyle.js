import styled from 'styled-components';

export const ChooseContainer = styled.div`
    display:flex;
    background:rgba(0,0,0,0.4);
    width:100vw;
    height:100vh;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:3;
    align-item:center;
    justify-content: center;
`
export const ChooseItem = styled.div`
    width:70vw;
    height:70vh;
    position:relative;
`
export const ChooseTitle = styled.div`
    z-index:4;
    color: #fff;
    font-size: 40px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;
    text-align: right;
    position:absolute;
    top:10%;
    right:10%;

    @media screen and (max-width:1280px){
        font-size: 35px;
    }
    @media screen and (max-width:800px){
        font-size: 30px;
    }
    @media screen and (max-width:640px){
        font-size: 25px;
    }

`
export const ChooseImage = styled.img`
    position:absolute;
    top:70%;
    left:50%;
    transform:translate(-50%,-50%);
    height:100%;
    
    @media screen and (max-width:800px){
        width:100%;
        height:auto;
    }
`