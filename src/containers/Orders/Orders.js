import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

class Orders extends Component{
    state = {
        orders: [],
        loading: true,
    }

    componentDidMount() {
        axios.get('/orders')
            .then(res => {
                const fetchedOrders = [];
                for (const key of res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order, i) => {
                    return <Order
                        key={order.id + i}
                        ingredients={order.id.ingredients}
                        price={order.id.price} />
                })}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);