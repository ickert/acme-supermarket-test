import React, { useCallback, useEffect, useState } from 'react';
import BasketComponent from '../components/Basket';
import ProductsComponent from '../components/Products';
import basket from '../basket';
import rules from '../core/rules';
import products from '../mockData/products';

const _basket = new basket(rules);

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
            <ProductsComponent products={products} addItemBasket={addItemBasket}></ProductsComponent>
            <BasketComponent basketItems={basketItems} total={total} />
            <div>
                <button onClick={() => cleanAll() }>Clean</button>
            </div>
        </div>
    )
}

export default Main;