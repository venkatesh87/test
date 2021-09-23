import React, {useEffect, useState} from 'react';
import {toggleDrawer} from '~/store/app/action';
import {useDispatch, connect} from 'react-redux';
import Link from 'next/link';
import {getCartKeyFromStorage} from '~/utilities/ecomerce-helpers';
import _ from 'lodash';
import CartRepository from '~/repositories/CartRepository';

const ModuleHeaderActions = ({cart}) => {
  const dispatch = useDispatch();
  const [cartTotal, setCartTotal] = useState(0);

  function handleOpenDrawer(e) {
    e.preventDefault();
    dispatch(toggleDrawer(true));
  }

  async function getCartItems() {
    const cartKey = await getCartKeyFromStorage();

    if (!_.isEmpty(cartKey)) {
      const cart = await CartRepository.getCartItemsByCartKey(cartKey);
      if (!_.isEmpty(cart.items)) {
        setCartTotal(Object.entries(cart.items).length);
      } else {
        setCartTotal(0);
      }
    }
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="header__actions">
      <Link href="/auth/login">
        <a className="header__user">
          <i className="icon-user"></i>
        </a>
      </Link>
      <Link href="/shop/wishlist">
        <a className="header__favorite">
          <i className="icon-heart"></i>
        </a>
      </Link>

      <Link href="/shop/shopping-cart">
        <a className="header__cart ps-toggle--sidebar">
          <i className="icon-cart"></i>
          <span>{cartTotal}</span>
        </a>
      </Link>

      <a
        className="header__menu-toggle ps-toggle--sidebar"
        href="#navigation-mobile"
        onClick={(e) => handleOpenDrawer(e)}
      >
        <i className="icon-menu"></i>
      </a>
    </div>
  );
};

export default connect((state) => state.cart)(ModuleHeaderActions);
