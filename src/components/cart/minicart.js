import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MiniCartList from './minicartlist';
import MiniCartItem from './minicartitem';
// import CartTotals from './carttotals';

class Minicart extends Component{
  render(){
    return(
      <React.Fragment>
       <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Cart details</span>
          <span class="badge badge-secondary badge-pill">count</span>
        </h4>
        <ul class="list-group mb-3">
            <MiniCartItem />
        </ul>


           {/*<h4 class="d-flex justify-content-between align-items-center mb-3">
             <span class="text-muted">Your cart</span>
             <span class="badge badge-secondary badge-pill">count</span>
           </h4>
           <ul class="list-group mb-3">
             <li class="list-group-item d-flex justify-content-between lh-condensed">
               <div>
                 <h6 class="my-0">Product name</h6>
                 <small class="text-muted">Brief description</small>
               </div>
               <span class="text-muted">$</span>
             </li>
             <li class="list-group-item d-flex justify-content-between bg-light">
               <div class="text-success">
                 <h6 class="my-0">Promo code</h6>
                 <small>EXAMPLE CODE</small>
               </div>
               <span class="text-success">-$5</span>
             </li>
             <li class="list-group-item d-flex justify-content-between">
               <span>Total (USD)</span>
               <strong>$ {CartTotals}</strong>
             </li>
           </ul>
           */}
           <div class="row ml-1">
           <form class="card p-2">
             <div class="input-group">
               <input type="text" class="form-control" placeholder="Promo code"/>
               <div class="input-group-append">
                 <button type="submit" class="btn btn-secondary">Redeem</button>
               </div>
             </div>
           </form>
         </div> 
      </React.Fragment>
    )
  }
}

export default Minicart;