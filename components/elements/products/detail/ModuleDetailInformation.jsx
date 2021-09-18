import React from 'react';
import {connect} from 'react-redux';
import Rating from '~/components/elements/Rating';
import SubModuleDetailSpecification from '~/components/elements/products/detail/modules/SubModuleDetailSpecification';
import SubModuleDetailShopping from '~/components/elements/products/detail/modules/SubModuleDetailShopping';
import {SPGetProductPrice} from '~/utilities/product-helper';

const ModuleDetailInformation = ({product}) => {
  return (
    <div className="ps-product__info">
      <div className="ps-product__info-header">
        <div className="ps-product__rating">
          <Rating />
          <span>{'0 Review'}</span>
        </div>
        <h2 className="ps-product__title">{product.name}</h2>
        <span className="ps-product__sku">{'SKU: TODO'}</span>
        <h4 className="ps-product__price">{SPGetProductPrice(product)}</h4>
      </div>
      <div className="ps-product__desc">
        <p>{product.description}</p>
      </div>
      <SubModuleDetailShopping product={product} />
      <SubModuleDetailSpecification product={product} />
    </div>
  );
};

export default connect((state) => state.cart)(ModuleDetailInformation);
