import styled from 'styled-components';

export const ProductContainer = styled.div`
    width:100vw;
    background: #E1B795;
`
export const ProductWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 50px 0 0 0;
`
export const ProductItem = styled.div`
    flex: 1 1 30%;
    margin-bottom: 30px;
    position:relative;
    transition: all 0.5s;

    &:hover{
        transform: scale(1.1);
        filter: brightness(110%);
    }
`
export const ProductItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 50px 30px;
`
export const ProductItemTitle = styled.div`
    color: #000;
    font-size: 30px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;
    text-align: right;
    position:absolute;
    top:10%;
    right:20%;

    @media screen and (max-width:1280px){
        font-size: 28px;
    }
    @media screen and (max-width:800px){
        font-size: 20px;
    }
    @media screen and (max-width:640px){
        font-size: 12px;
    }
    
`
export const ProductImage = styled.img`
    width:90%;
`

export const ProductTitle = styled.h1`
    color: #fff;
    font-size: 70px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;
    

    @media screen and (max-width:1280px){
        font-size: 60px;
    }
`