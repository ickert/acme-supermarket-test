const rules = {
    xForOne: (basketCount, product, params) => {
        const productAcount = basketCount[product]
        if (!productAcount) {
            return {...basketCount}
        }
        return {
            ...basketCount,
            [product]: {
                ...basketCount[product],
                total: Math.ceil(productAcount.total/params.x)
            }
        }
    },
    bucketDiscont: (basketCount, product, params) => {
        const productAcount = basketCount[product]
        if (!productAcount) {
            return {...basketCount}
        }
        let price = productAcount.price
        if (productAcount.total >= params.limit) {
            price = params.newPrice
        }
        return {
            ...basketCount,
            [product]: {
                ...basketCount[product],
                price,
            }
        }   
    },
}

 export default rules;