import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './cartcolumns';
import EmptyCart from './emptyCart';
import { ProductConsumer } from '../../context';
import CartList from './cartlist';
import CartTotals from './carttotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value =>{
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                                <React.Fragment>
                                    <Title name="your" title="cart" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={this.props.history} />
                               </React.Fragment>
                            )
                        } else{
                           return(
                            <EmptyCart />
                           ) 
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
