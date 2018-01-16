import React, { Component } from 'react';
import {connect} from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../../containers/Checkout/ContactData/ContactData';
import { Route } from 'react-router-dom';

class Checkout extends Component{
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    onCheckoutContinued={this.checkoutContinuedHandler}
                    onCheckoutCancelled={this.checkoutCancelledHandler}
                    ingredients={this.props.ings} />
                {/* <Route
                    path={this.props.match.path + '/contact-data'}
                    render={props => (<ContactData totalPrice={Number.parseFloat(this.state.totalPrice).toFixed(2) ingredients={this.state.ingredients {...this.props}}})} /> */}
                <Route
                    path={this.props.match.path + '/contact-data'}
                    component={ContactData} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
    }
}

export default connect(mapStateToProps)(Checkout);