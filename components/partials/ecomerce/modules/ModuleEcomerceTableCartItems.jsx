import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  decreaseItemQty,
  increaseItemQty,
  removeItem
} from '~/store/cart/action';
import ProductOnCart from '~/components/elements/products/ProductOnCart';
import _ from 'lodash';

const ModuleEcomerceTableCartItems = ({cart}) => {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  function handleIncreaseItemQty(e, product) {
    let {quantity} = product;
    quantity++;
    if (quantity <= 99) {
      product.quantity = quantity;
      e.preventDefault();
      dispatch(increaseItemQty(product));
    }
  }

  function handleDecreaseItemQty(e, product) {
    let {quantity} = product;
    quantity--;
    if (quantity >= 1) {
      product.quantity = quantity;
      e.preventDefault();
      dispatch(decreaseItemQty(product));
    }
  }

  function handleRemoveItem(e, product) {
    e.preventDefault();
    dispatch(removeItem(product));
  }

  async function getCartItems() {
    const {items} = await cart;
    setCartItems(items);
  }

  useEffect(() => {
    getCartItems();
  }, [cart]);

  // View
  let cartItemsViews;
  if (cartItems) {
    if (cartItems.length > 0) {
      const items = cartItems.map((item) => (
        <tr key={item.key}>
          <td>
            <ProductOnCart cartItem={item} />
          </td>
          <td>
            <strong>₹{item.price}</strong>
          </td>
          <td>
            <div className="form-group--number">
              <button
                className="up"
                onClick={(e) => handleIncreaseItemQty(e, item)}
              ></button>
              <button
                className="down"
                onClick={(e) => handleDecreaseItemQty(e, item)}
              ></button>
              <input
                className="form-control"
                type="text"
                value={item.quantity}
                placeholder={item.quantity}
              />
            </div>
          </td>
          <td>
            <p>
              <strong>₹{(item.price * item.quantity).toFixed(2)}</strong>
            </p>
          </td>
          <td>
            <a
              className="ps-icon"
              href="#"
              onClick={(e) => handleRemoveItem(e, item)}
            >
              <i className="icon-cross"></i>
            </a>
          </td>
        </tr>
      ));
      cartItemsViews = <tbody>{items}</tbody>;
    } else {
      cartItemsViews = (
        <tbody>
          <tr>
            <td colSpan={5} className="text-left">
              {'No product found.'}
            </td>
          </tr>
        </tbody>
      );
    }
  }
  return (
    <table className="table ps-table ps-table--shopping-cart ps-table--resonsive">
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      {cartItemsViews}
    </table>
  );
};

export default connect((state) => state.cart)(ModuleEcomerceTableCartItems);
