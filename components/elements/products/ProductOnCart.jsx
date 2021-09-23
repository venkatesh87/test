import React from 'react';
import Link from 'next/link';

import {SPGetProductImageCart} from '~/utilities/product-helper';

const ProductOnCart = ({cartItem}) => {
  // Views
  //   const priceView = SPGetProductPrice(cartItem);
  const thumbnailImage = SPGetProductImageCart(cartItem);

  return (
    <div className={`ps-cartItem--sidebar`}>
      <div className="ps-product__thumbnail">
        <div className="col-md-4 col-sm-6 col-6">
          <span>{thumbnailImage}</span>
        </div>
        <span className="ps-product__content">
          <Link href={`/product/${cartItem.product_id}`}>
            <a className="ps-product__title">{cartItem.name}</a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ProductOnCart;
