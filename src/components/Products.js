import React from 'react';

const Products = props => {
    return (
        <div>
           <p>Products</p>
           <div>
           {
                props.products.map(product => {
                    const { price, key, name } = product;
                    return (<div key={key} onClick={() => props.addItemBasket(product)}>
                        <div>
                            <b>{key} </b>{name} <span>{price.toFixed(2)}</span>
                        </div>
                    </div>)
                })
            }
           </div>
        </div>
    )
}

export default Products;

