import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';

import Link from 'next/link';
const CheckoutSuccessPage = (props) => {
  const {storeState} = props;

  const breadcrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Checkout',
      url: '/shop/checkout'
    },
    {
      text: 'Checkout success'
    }
  ];
  return (
    <div className="ps-page--default">
      <div className="container">
        <div className="ps-page__content text-center">
          <h3>{'Your order has been placed successfully !!!'}</h3>
          <h3>{`Order number #: ${storeState.orderNumber}`}</h3>
          <div>
            <Link href="/shop">
              <a className="ps-btn ps-btn--sm ps-btn--success ps-btn--curve">
                {'Continue Shoppping'}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccessPage;
