import React, { useCallback, useEffect, useState } from 'react';
import BasketComponent from '../components/Basket';
import ProductsComponent from '../components/Products';
import basket from '../basket';
import rulesToApply from '../core/rulesToApply';
import products from '../mockData/products';
import styled from 'styled-components';

const ButtonClean = styled.button`
    margin-right: 20px;
    background: #d0d0d0;
    border: 0;
    border-radius: 4px;
    padding: 10px;
    color: #e07a6a;
    min-width: 100px;
    cursor: pointer;
    
    &:hover {
        background: #e07a6a;
        color: #fff;
    }
`

const _basket = new basket(rulesToApply);

const Main = () => {
    const [basketItems, setBasketItems] = useState([])
    const [total, setTotal] = useState(0)

    const cleanAll = useCallback(() => {
        _basket.clean()
        setBasketItems([])
    })

    const addItemBasket = useCallback((product) => {
        _basket.add(product.key)
        setBasketItems([...basketItems, product])
    }, [basketItems])

    useEffect(() => {
        setTotal(_basket.total())
    }, [basketItems])

    return (
        <div>
            <div className="flexContainer">
                <span className="flex"></span>
                <ButtonClean onClick={() => cleanAll() }>Clean</ButtonClean>
            </div>
            <div className="flexContainer">
                <ProductsComponent products={products} addItemBasket={addItemBasket}></ProductsComponent>
                <BasketComponent basketItems={basketItems} total={total} />
            </div>
            
        </div>
        
    )
}

export default Main;