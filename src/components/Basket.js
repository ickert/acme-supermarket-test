import React, { useState } from 'react';
import rulesToApply from '../core/rulesToApply';
import JSONPretty from 'react-json-pretty';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 4px;
    background: #fff;
    margin: 20px;
    min-width: 200px;
    box-shadow: -7px -5px 44px -15px rgba(0,0,0,0.75);

    .title {
        font-size: 16px;
        font-weight: bolder;
        text-transform: uppercase;
        margin-top:10px;
        padding: 10px;
    }

    .see-rules {
        font-size: 11px;
        opacity: .6;
        cursor: pointer;
        padding-top: 23px;

        :hover {
            color: #e07a6a;
        }
    }
    .total {
        padding-left: 10px;
    }

    .container-items {
        padding-bottom: 10px;
    }
`

const BasketItem = styled.div`
    padding-left: 10px;
`

const Basket = props => {
    const [showRules, toggleShowRules] = useState(false)
    return (
        <Container>
            <div className="flexContainer">
                <div className="title">Basket </div>
                <div className="see-rules" onClick={() => toggleShowRules(!showRules)}>
                    {showRules ? '(Back to basket)' : '(See the market rules)' }
                </div>
            </div>
            {
                showRules ? (
                    <div>
                        <JSONPretty id="json-pretty" data={rulesToApply}></JSONPretty>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="total">
                            <b>TOTAL: </b> {props.total.toFixed(2)}
                        </div>
                        <div className="container-items">
                            {props.basketItems.map((basketItem, index) => {
                                return (
                                    <BasketItem key={`${basketItem.key}_${index}`}>
                                        1x {basketItem.name}
                                    </BasketItem>
                                )
                            })}
                        </div>
                    </React.Fragment>
                )
            }
            
        </Container>
    )
}

export default Basket;