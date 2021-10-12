import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';

const ModuleCheckoutOrderSummary = ({cart}) => {
  const [cartTotals, setCartTotals] = useState({
    discount_total: 0,
    subtotal: 0,
    total: 0
  });

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

  return (
    <>
      <div className="text-left">
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
        <div className="d-flex">
          <div className="flex-grow-1">
            <span>{'Total:'}</span>
          </div>
          <span>{`$${Math.ceil(cartTotals.total)}`}</span>
        </div>
      </div>
    </>
  );
};

export default connect((state) => state.cart)(ModuleCheckoutOrderSummary);
