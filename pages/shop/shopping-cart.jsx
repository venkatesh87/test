import React, {useEffect, useState} from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import EcomerceShoppingCart from '~/components/partials/ecomerce/EcomerceShoppingCart';
import {getCartKeyFromStorage} from '~/utilities/ecomerce-helpers';
import _ from 'lodash';
import CartRepository from '~/repositories/CartRepository';

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const breadcrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Shop'
    }
  ];
  async function getCartItems() {
    const cartKey = await getCartKeyFromStorage();

    if (!_.isEmpty(cartKey)) {
      const cart = await CartRepository.getCartItemsByCartKey(cartKey);
      if (!_.isEmpty(cart.items)) {
        let items = [];
        for (const [keys, value] of Object.entries(cart.items)) {
          items.push(value);
        }
        if (items.length > 0) {
          setCartItems(items);
        }
      } else {
        setCartItems([]);
      }
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <ContainerPage title="Shopping Cart">
      <div className="ps-page--default">
        <div className="container">
          <div className="ps-page__header">
            <h3>{'Shopping Cart'}</h3>
            <BreadCrumb breacrumb={breadcrumb} />
          </div>
          <div className="ps-page__content">
            {!_.isEmpty(cartItems) && <EcomerceShoppingCart cart={cartItems} />}
          </div>
        </div>
      </div>
    </ContainerPage>
  );
};

export default ShoppingCartPage;
