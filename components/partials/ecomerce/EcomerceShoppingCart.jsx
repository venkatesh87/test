import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import ModuleEcomerceTableCartItems from '~/components/partials/ecomerce/modules/ModuleEcomerceTableCartItems';
import Link from 'next/link';
import ModuleEcomerceSummary from '~/components/partials/ecomerce/modules/ModuleEcomerceSummary';
import {applyCoupon} from '~/utilities/ecomerce-helpers';
import _ from 'lodash';
import { getCart} from '~/store/cart/action';

const EcomerceShoppingCart = () => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState({});
  const [addCouponResponse, setAddCouponResponse] = useState({});

  async function addCoupon(e) {
    e.preventDefault();
    const response = await applyCoupon(couponCode);
    setAddCouponResponse(response);
    if (response.success) {
      dispatch(getCart());
    }
  }

  function couponCodeChangeHandler(e) {
    setCouponCode(e.target.value);
  }

  return (
    <div className="ps-shopping-cart">
      <ModuleEcomerceTableCartItems />
      <div className="ps-section__content">
        <div className="ps-section__actions">
          <figure>
            <Link href="/shop/categories">
              <a className="ps-btn ps-btn--outline">{'Continue shopping'}</a>
            </Link>
          </figure>
          <div className="ps-block__coupon">
            <h5>{'Coupon Code'}</h5>
            <form onSubmit={addCoupon}>
              <div className="form-group d-flex justify-content-start">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your code"
                  required
                  onChange={(event) => {
                    couponCodeChangeHandler(event);
                  }}
                />
                <button className="ps-btn ps-btn--gray">{'Apply'}</button>
              </div>
              <div>
                {!_.isEmpty(addCouponResponse) ? (
                  addCouponResponse.success ? (
                    <div className="text-success">
                      {'Coupon applied successfully'}
                    </div>
                  ) : (
                    <div className="text-danger">{addCouponResponse.error}</div>
                  )
                ) : null}
              </div>
            </form>
          </div>
        </div>
        <ModuleEcomerceSummary />
      </div>
    </div>
  );
};

export default connect((state) => state.cart)(EcomerceShoppingCart);
