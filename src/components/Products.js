import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 4px;
    background: #fff;
    margin: 20px;
    min-width: 300px;
    box-shadow: -7px -5px 44px -15px rgba(0,0,0,0.75);

    p {
        font-size: 16px;
        font-weight: bolder;
        text-transform: uppercase;
        padding: 10px;
    }
`

const Product = styled.div`
    border-bottom: 1px solid #d0d0d0;
    padding: 10px;
    cursor: pointer;
    
    &:hover {
        background: #e07a6a;
        color: #fff;
    }
`

const Products = props => {
    return (
        <Container>
           <p>Products</p>
           <div>
           {
                props.products.map(product => {
                    const { price, key, name } = product;
                    return (<Product key={key} onClick={() => props.addItemBasket(product)}>
                        <div className="flexContainer">
                            <b>{key} </b> - {name} <span className="flex"></span><span>{price.toFixed(2)}</span>
                        </div>
                    </Product>)
                })
            }
           </div>
        </Container>
    )
}

export default Products;

