import React, {useEffect, useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  getCartSubTotal,
  getCartDiscounts,
  removeCoupon
} from '~/utilities/ecomerce-helpers';
import Link from 'next/link';
import _ from 'lodash';
import {getCart} from '~/store/cart/action';

const ModuleEcomerceSummary = ({cart}) => {
  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);
  const [discounts, setDiscounts] = useState({coupons: [], discountTotal: 0});

  async function getCartItems() {
    const {items, coupons, totals} = await cart;
    setCartItems(items);
    setDiscounts(getCartDiscounts(coupons, totals));
  }

  useEffect(() => {
    getCartItems();
  }, [cart]);

  async function deleteCoupon(couponCode) {
    await removeCoupon(couponCode);
    dispatch(getCart());
  }

  let renderDiscountView = null;
  if (!_.isEmpty(discounts.coupons)) {
    renderDiscountView = (
      <>
        <div className="d-flex">
          <div className="flex-grow-1">
            <h4>{'Discounts'}</h4>
          </div>
          <h5>{`-₹${discounts.discountTotal}`}</h5>
        </div>
        <div className="d-flex flex-column">
          {discounts.coupons.map((coupon) => (
            <div className="flex-grow-1">
              <h5 className="text-secondary">{coupon}</h5>
              <button
                type="button"
                class="btn btn-link"
                onClick={() => {
                  deleteCoupon(coupon);
                }}
              >
                {'Remove'}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  } else {
    renderDiscountView = (
      <div className="d-flex">
        <div className="flex-grow-1">
          <h4>{'Discounts'}</h4>
        </div>
        <h5 className="text-secondary">{`$0`}</h5>
      </div>
    );
  }
  return (
    <div className="ps-block--checkout-total">
      <div className="ps-block__top">
        <div className="ps-block__shipping">{renderDiscountView}</div>
        <h4>
          {'Subtotal'} <span>{`₹${getCartSubTotal(cartItems)}`}</span>
        </h4>
        {/* <div className="ps-block__shipping">
          <h5>{'Shipping'}</h5>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-1"
              name="shipping"
            />
            <label htmlFor="shipping-1">
              {'Free Shipping'} <span>{'+$00.00'}</span>
            </label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-2"
              name="shipping"
            />
            <label htmlFor="shipping-2">
              {'Flat Rate'} <span>{'+$10.00'}</span>
            </label>
          </div>
          <div className="ps-radio">
            <input
              className="form-control"
              type="radio"
              id="shipping-3"
              name="shipping"
            />
            <label htmlFor="shipping-3">
              {'Local Delivery'} <span>{'+$20.00'}</span>
            </label>
          </div>
        </div> */}
        {/* <div className="ps-block__caculate">
          <h5>{'Calculate Shipping'}</h5>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              placeholder="Postcode / ZIP"
            />
          </div>
          <button className="ps-btn ps-btn--gray">{'Update Total'}</button>
        </div> */}
        <div className="ps-block__total">
          <h3>
            {'Total'}
            <span>{`₹${getCartSubTotal(cartItems)}`}</span>
          </h3>
        </div>
      </div>
      <div className="ps-block__bottom">
        <Link href="/shop/checkout">
          <a className="ps-btn ps-btn--black">{'Proceed to checkout'}</a>
        </Link>
      </div>
    </div>
  );
};

export default connect((state) => state.cart)(ModuleEcomerceSummary);
