import products from '../mockData/products';
import _rulesDefinition from '../core/rulesDefinition';
     
const Basket = class {

    constructor(rules, listBasket) {
        this.basketList = listBasket || []
        this.rules = rules
    }

    add(item) {
        this.basketList.push(item)
    }

    clean() {
        this.basketList = []
    }
    
    getBasket() {
        return this.basketList
    }
    
    totalWithoutRules(list) {
        return [...list].reduce((agregator, current) => {
            const product = products.find(item => item.key === current)
            return agregator += (product ? product.price : 0)
        },0)
    }

    totalNormal(counting) {
        return Object.keys(counting).reduce((acc, curr) => {
            return acc += counting[curr].price * counting[curr].total
        }, 0)
    }

    totalWithRules(list) {
        const basketCounting = [...list].reduce(function (acc, curr) {
            const product = products.find(item => item.key === curr)
            if (typeof acc[curr] === 'undefined') {
                acc[curr] = {
                    ...product,
                    total: 1
                }
            } else {
                acc[curr] = {
                    ...product,
                    total: acc[curr].total + 1
                }
            }

        return acc;
        }, {});
      
         
        const basketTotalWithRules = this.rules.reduce((acc, rule) => {
            const ruleReturn = _rulesDefinition[rule.name](acc.basketAfterRule, rule.product, rule.params)
            return { total: this.totalNormal(ruleReturn), basketAfterRule: ruleReturn }
        }, {
            total: 0,
            basketAfterRule: basketCounting
        })
      
        return basketTotalWithRules.total
    }

    total() {
        return this.totalWithRules(this.basketList)
    }
};

export default Basket;
  
//   const basket = new Basket(pricingRules, [])

//   console.log(basket.total())