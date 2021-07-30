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
    padding: 50px 0;
`
export const ProductItem = styled.div`
    
`
export const ProductItemWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const ProductItemTitle = styled.div`
    color: #fff;
    font-size: 30px;
    font-family: 'WindSong', cursive;
    font-weight:500;
    line-height: 0;
    text-align: right;

    @media screen and (max-width:1280px){
        font-size: 28px;
    }
    @media screen and (max-width:800px){
        font-size: 26px;
    }
    @media screen and (max-width:640px){
        font-size: 24px;
    }
    
`
export const ProductImage = styled.img`
    width:200px;
    height:200px;
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