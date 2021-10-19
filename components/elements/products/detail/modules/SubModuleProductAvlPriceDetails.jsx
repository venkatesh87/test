import React from 'react';
import {SPGetProductPrice} from '~/utilities/product-helper';

export default function SubModuleProductAvlPriceDetails({product}) {
  let renderProductStatus = null;
  if (product) {
    if (product.stock_status === 'instock') {
      renderProductStatus = <span className="text-success">{'In stock'}</span>;
    } else {
      renderProductStatus = (
        <span className="text-danger">{product.stock_status}</span>
      );
    }
  }
  return (
    <>
      <div className="pb-2">{renderProductStatus}</div>
      {!product.isVariantEnable && (
        <span className="ps-product__sku">{`SKU: ${product.sku}`}</span>
      )}
      <h3 className="ps-product__price border-bottom">
        {SPGetProductPrice(product)}
      </h3>
    </>
  );
}
