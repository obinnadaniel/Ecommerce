import React from 'react';

export default function MiniCartItem({item, value}) {
    const{ title, price, total, count } = item;
    const { increment, decrement, removeItem } = value;
    return (
        <React.Fragment>
                    <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">{title}<span class="badge badge-secondary badge-pill">{count}</span></h6>
                        <small class="text-muted">Brief description</small>
                    </div>
                    <span class="text-muted">${price}</span>
                    </li>
                    {/* <li class="list-group-item d-flex justify-content-between">
                    <span>Total (USD)</span>
                    <strong>$ {total}</strong>
                    </li> */}
                
            </React.Fragment>
        
    )
}