import React from 'react';
import { ProductContainer, ProductWrapper,
    ProductTitle,ProductItem, ProductItemTitle,
    ProductImage, } from '../styles/ProductStyle';

const Product = ({type}) => {
    return (
        <ProductContainer>
            <ProductWrapper>
                <ProductTitle>
                    {type}
                </ProductTitle>
                <ProductItem>
                    <ProductItemTitle>

                    </ProductItemTitle>
                    <ProductImage>

                    </ProductImage>
                </ProductItem>
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
