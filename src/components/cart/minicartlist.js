import React from 'react';
import MiniCartItem from './minicartitem';

export default function MiniCartList({value}) {
    const {cart} = value;
    return (
        <div className="container-fluid">
            {cart.map(item =>{
                return <MiniCartItem key={item.id} item={item} value={value} />
            })}
        </div>
    )
}