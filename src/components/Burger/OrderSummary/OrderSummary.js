import React, { Component } from 'react';

import Aux from '../../../hoc/_Aux/_Aux';
import Button from '../../UI/Button/Button';

export default class OrderSummary extends Component {

    componentWillUpdate() {
        console.log('[Modal] Will Update')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span> : {this.props.ingredients[igKey]}</li>
            })
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the foolowing ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout ?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceler} >CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue} >CONTINUE</Button>
            </Aux>
        )
    }
}