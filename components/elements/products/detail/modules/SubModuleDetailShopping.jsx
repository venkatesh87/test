import React, {useState} from 'react';
import {addItem} from '~/store/cart/action';
import {useDispatch} from 'react-redux';
import {addItemToWishlist} from '~/store/wishlist/action';
import _ from 'lodash';

const SubModuleDetailShopping = (props) => {
  const {storeState} = props;
  const {product, addToCartEnabled, selectedVariant} = storeState;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddItemToCart = (e) => {
    e.preventDefault();
    let item = {};
    item.product_id = product.id;
    item.quantity = quantity;
    item.cart_item_data = {};
    item.variation = {};
    item.variation_id = 0;
    if (!_.isEmpty(selectedVariant)) {
      item.variation_id = selectedVariant.id;
      let variantAttr = {};
      for (const attr of selectedVariant.attributes) {
        variantAttr[`attribute_${attr.name}`] = attr.option;
      }
      item.variation = variantAttr;
    }
    dispatch(addItem({...item}));
  };

  const handleIncreaseItemQty = (e) => {
    e.preventDefault();
    setQuantity(quantity + 1);
  };

  const handleDecreaseItemQty = (e) => {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddItemToWishlist = (e) => {
    e.preventDefault();
    dispatch(addItemToWishlist(product.id));
  };

  let renderAddToCartButton = null;
  if (!product.isVariantEnable || addToCartEnabled) {
    renderAddToCartButton = (
      <a
        className="ps-btn ps-btn--black"
        href="#"
        onClick={(e) => handleAddItemToCart(e)}
      >
        {'Add to cart'}
      </a>
    );
  } else {
    renderAddToCartButton = (
      <div className="ps-btn ps-btn--disabled">{'Add to cart'}</div>
    );
  }
  return (
    <div className="ps-product__shopping">
      <figure>
        <div className="form-group--number">
          <button className="up" onClick={handleIncreaseItemQty}></button>
          <button className="down" onClick={handleDecreaseItemQty}></button>
          <input className="form-control" type="text" placeholder={quantity} />
        </div>
        {renderAddToCartButton}
        <a
          className="ps-product__favorite"
          href="#"
          onClick={(e) => handleAddItemToWishlist(e)}
        >
          <i className="fa fa-heart-o"></i>
        </a>
      </figure>
    </div>
  );
};

export default SubModuleDetailShopping;
