import React, { Component } from 'react';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import { Route, Redirect } from 'react-router-dom';
import Aux from '../../hoc/_Aux/_Aux';

class Checkout extends Component{
    
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        let summary = <Redirect to="/" />

        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <Aux>
                    {purchasedRedirect}
                    <CheckoutSummary
                        onCheckoutContinued={this.checkoutContinuedHandler}
                        onCheckoutCancelled={this.checkoutCancelledHandler}
                        ingredients={this.props.ings} />
                    <Route
                        path={this.props.match.path + '/contact-data'}
                        component={ContactData} />
                    {/* <Route
                    path={this.props.match.path + '/contact-data'}
                    render={props => (<ContactData totalPrice={Number.parseFloat(this.state.totalPrice).toFixed(2) ingredients={this.state.ingredients {...this.props}}})} /> */}                
                </Aux>                
            )
        }
        return summary;
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased,
    }
}

export default connect(mapStateToProps)(Checkout);