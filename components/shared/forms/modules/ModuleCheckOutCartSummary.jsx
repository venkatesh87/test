import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

const ModuleCheckOutCartSummary = ({cart}) => {
  const [cartItems, setCartItems] = useState([]);

  async function getCartItems() {
    const {items} = await cart;
    setCartItems(items);
  }

  useEffect(() => {
    getCartItems();
  }, [cart]);

  let cartItemsViews = null;
  if (!_.isEmpty(cartItems)) {
    cartItemsViews = cartItems.map((item) => (
      <div class="card my-2" key={item.id}>
        <div class="card-body">
          <div className="d-flex">
            <div>
              <img
                className="check-out-product-thumb"
                src={item.thumb}
                alt={item.name}
              />
            </div>
            <div>
              <div>{item.name}</div>
              <div>{`Price: ₹{item.price}`}</div>
              <div>{`Quantity: ₹{item.quantity}`}</div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return <>{cartItemsViews}</>;
};

export default connect((state) => state.cart)(ModuleCheckOutCartSummary);
