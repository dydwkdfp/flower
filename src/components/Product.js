import React,{useState} from 'react';
import { ProductContainer, ProductWrapper,
    ProductTitle,ProductItem, ProductItemTitle,
    ProductImage, ProductItemWrapper} from '../styles/ProductStyle';

import { ChooseContainer, ChooseItem, 
    ChooseTitle, ChooseImage } from '../styles/ChooseStyle';
import {Link} from "react-router-dom";
import { AnimateSharedLayout, AnimatePresence, motion } from 'framer-motion';
import { product } from 'prelude-ls';

export const Product = ({type, Data}) => {
    const [SelectedId, setSelectedId] = useState(null);
    const [image, setimage] = useState('');

    return (
        <ProductContainer>
            <ProductWrapper>
                <ProductTitle>
                    {type}
                </ProductTitle>
            <ProductItemWrapper>
                <AnimateSharedLayout type="crossfade">
                {Data && Data.map((product,index) => {
                    return(
                    <ProductItem key={index} onClick={() => {setSelectedId(product.id); setimage(product.image)}}>
                        <ProductItemTitle>
                            {type}_{index+1}
                        </ProductItemTitle>
                        <ProductImage src={product.image}/>
                    </ProductItem>
                    )
                })}
                <AnimatePresence>
                {SelectedId && (
                    <motion.div initial={{opacity:0}} animate={{opacity:1}} duration={0.2}>
                    <ChooseContainer onClick={()=>setSelectedId(null)}>
                        <ChooseItem>
                            <ChooseTitle>
                                {type}_{SelectedId}
                            </ChooseTitle>
                            {console.log(image)}
                           <ChooseImage src={image}/>
                        </ChooseItem>
                    </ChooseContainer>
                    </motion.div>
                )}
                </AnimatePresence>
                </AnimateSharedLayout>
            </ProductItemWrapper>

            </ProductWrapper>
        </ProductContainer>
    )
}

export default Product
