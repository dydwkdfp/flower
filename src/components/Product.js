import React,{useState} from 'react';
import { ProductContainer, ProductWrapper,
    ProductTitle,ProductItem, ProductItemTitle,
    ProductImage, ProductItemWrapper} from '../styles/ProductStyle';

const Product = ({type, Data}) => {

    {console.log(Data)}

    return (
        <ProductContainer>
            <ProductWrapper>
                <ProductTitle>
                    {type}
                </ProductTitle>
            <ProductItemWrapper>
                {Data && Data.map((product,index) => {
                    return(
                    <ProductItem key={index}>
                        <ProductItemTitle>
                            {type}_{index}
                        </ProductItemTitle>
                        <ProductImage src={product.image}/>
                    </ProductItem>
                    )
                })}
            </ProductItemWrapper>
            </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
