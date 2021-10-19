import React, {createContext, useEffect, useState} from 'react';
import {connect} from 'react-redux';
import Rating from '~/components/elements/Rating';
import SubModuleDetailSpecification from '~/components/elements/products/detail/modules/SubModuleDetailSpecification';
import SubModuleDetailShopping from '~/components/elements/products/detail/modules/SubModuleDetailShopping';
import ModuleDetailOptions from '~/components/elements/products/detail/ModuleDetailOptions';
import SubModuleProductAvlPriceDetails from '~/components/elements/products/detail/modules/SubModuleProductAvlPriceDetails';

const initialProductSetup = {
  product: null,
  addToCartEnabled: false,
  selectedVariant: null
};
const ProductContext = createContext(initialProductSetup);

const ModuleDetailInformation = (props) => {
  const [storeState, setStoreState] = useState(initialProductSetup);

  useEffect(() => {
    if (!storeState.product) {
      updateStoreStateHandler({product: props.product});
    }
  }, []);

  const updateStoreState = (data) => {
    setStoreState({...data});
  };
  const updateStoreStateHandler = (data) => {
    updateStoreState(data);
  };

  return (
    <ProductContext.Provider value={(storeState, updateStoreState)}>
      {storeState.product && (
        <div className="ps-product__info">
          <div className="ps-product__info-header">
            <div className="ps-product__rating">
              <Rating />
              <span>{'0 Review'}</span>
            </div>
            <h2 className="ps-product__title">{storeState.product.name}</h2>
            <SubModuleProductAvlPriceDetails
              product={
                storeState.selectedVariant
                  ? storeState.selectedVariant
                  : storeState.product
              }
            />
          </div>
          <ModuleDetailOptions
            storeState={storeState}
            updateStoreStateHandler={updateStoreStateHandler}
          />
          <div className="ps-product__desc">
            <p>{storeState.product.description}</p>
          </div>
          <SubModuleDetailShopping storeState={storeState} />
          <SubModuleDetailSpecification storeState={storeState} />
        </div>
      )}
    </ProductContext.Provider>
  );
};

export default connect((state) => state.cart)(ModuleDetailInformation);
