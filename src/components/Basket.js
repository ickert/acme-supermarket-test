import React from 'react';

const Basket = props => {
    return (
        <div>
           <p>Basket</p>
           <div>
                {props.basketItems.map((basketItem, index) => {
                    return (
                        <div key={`${basketItem.key}_${index}`}>
                            1x {basketItem.name}
                        </div>
                    )
                })}
           </div>
           <div>
               <b>TOTAL: </b> {props.total}
           </div>
        </div>
    )
}

export default Basket;