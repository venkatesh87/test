import React from 'react';
import ModuleDetailContent from '~/components/elements/products/detail/ModuleDetailContent';
import ModuleDetailThumbnail from '~/components/elements/products/detail/ModuleDetailThumbnail';
import ModuleDetailInformation from '~/components/elements/products/detail/ModuleDetailInformation';
import _ from 'lodash';

const ProductDetail = ({product}) => {
  let renderProductImage = (
    <div className="ps-product__thumbnail" data-vertical="false"></div>
  );
  if (!_.isEmpty(product.images)) {
    renderProductImage = (
      <div>
        <img src={product.images[0].url} alt={product.name} />
      </div>
    );
  }

  return (
    <div className="ps-product--detail">
      <div className="ps-product__header">
        {/* TODO */}
        {/* <ModuleDetailThumbnail product={product} /> */}
        {renderProductImage}
        <ModuleDetailInformation product={product} />
      </div>
      <ModuleDetailContent product={product} />
    </div>
  );
};

export default ProductDetail;
