import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import ModulePaymentMethods from './ModulePaymentMethods';

const ModuleCheckoutSummary = ({cart}) => {
  const [cartTotals, setCartTotals] = useState({
    discount_total: 0,
    subtotal: 0,
    total: 0
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [isPaymentMethodMissing, setIsPaymentMethodMissing] = useState(false);

  async function getCartItems() {
    const {totals} = await cart;
    if (!_.isEmpty(totals)) {
      setCartTotals(totals);
    } else {
      setCartTotals({
        discount_total: 0,
        subtotal: 0,
        total: 0
      });
    }
  }

  useEffect(() => {
    getCartItems();
  }, [cart]);

  function selectedPaymentMethodHandler(param) {
    if (!_.isEmpty(param)) {
      setSelectedPaymentMethod(param);
      setIsPaymentMethodMissing(false);
    } else {
      setSelectedPaymentMethod('');
      setIsPaymentMethodMissing(true);
    }
  }

  return (
    <div className="ps-block--checkout-order">
      <div className="ps-block__content">
        <figure>
          <figcaption>
            <span>
              <b>{'Order Summary'}</b>
            </span>
          </figcaption>
        </figure>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span>{'Items:'}</span>
          </div>
          <span>{`$${cartTotals.subtotal}`}</span>
        </div>
        <div className="d-flex">
          <div className="flex-grow-1">
            <span>{'Discounts:'}</span>
          </div>
          <span>{`-$${cartTotals.discount_total}`}</span>
        </div>

        <figure className="ps-block__total">
          <figcaption>
            {'Total:'}
            <span>{`$${Math.ceil(cartTotals.total)}`}</span>
          </figcaption>
        </figure>
        <ModulePaymentMethods
          selectedPaymentMethodHandler={selectedPaymentMethodHandler}
          showErrorMessage={isPaymentMethodMissing}
        />
      </div>
      <div className="ps-block__footer">
        {/* <Link href="/shop/checkout-success">
          <a className="ps-btn ps-btn--fullwidth ps-btn--black">
            {'Process to checkout'}
          </a>
        </Link> */}
        <button
          className="ps-btn ps-btn--fullwidth ps-btn--black"
          type="submit"
        >
          {'Process to checkout'}
        </button>
      </div>
    </div>
  );
};

export default connect((state) => state.cart)(ModuleCheckoutSummary);
