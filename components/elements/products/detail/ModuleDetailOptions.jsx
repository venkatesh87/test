import React, {useState, useEffect} from 'react';
import ProductRepository from '~/repositories/ProductRepository';
import _ from 'lodash';

export default function ModuleDetailOptions(props) {
  const {storeState, updateStoreStateHandler} = props;
  const {product} = storeState;
  const [variants, setVariants] = useState([]);
  const [productAttrMeta, setProductAttrMeta] = useState([]);
  const [colorOptions, setColorOptions] = useState([]);
  const [sizeOptions, setSizeOptions] = useState([]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const getProductMetaData = async (product) => {
    if (product.isVariantEnable) {
      const variants = await ProductRepository.getProductVariants(product.id);
      if (!_.isEmpty(variants)) {
        const attrMeta = await ProductRepository.getProductAttributesMeta();
        getMoreOptions(product, attrMeta, 'Color');
        getMoreOptions(product, attrMeta, 'Size');
        setProductAttrMeta(attrMeta);
        setVariants(variants);
      }
    }
  };

  const getMoreOptions = (product, attrMeta, attrName) => {
    let attrs = [];
    const targetAttr = product.attributes.find((attr) => {
      return attr.name === attrName;
    });

    if (!_.isEmpty(targetAttr) && !_.isEmpty(targetAttr.options)) {
      const attrsData = attrMeta.find((attr) => {
        return attr.name === attrName;
      });
      for (const attrOption of targetAttr.options) {
        const attrDetails = attrsData.options.find((c) => {
          return c.name === attrOption;
        });
        attrs.push(attrDetails);
      }
    }
    if (!_.isEmpty(attrs)) {
      if (attrName === 'Color') {
        setColorOptions(attrs);
      }
      if (attrName === 'Size') {
        setSizeOptions(attrs);
      }
    }
  };

  const selectVariantHandler = () => {
    let selectedVariant = [];
    let selectedOption = null;
    const productAttributes = product.attributes.map((attr) => attr.name);
    if (productAttributes.length === 1) {
      selectedOption =
        productAttributes[0] === 'Size' ? selectedSize : selectedColor;
      selectedVariant = variants.find((variant) => {
        return variant.attributes.find((attr) => {
          return (
            attr.name === productAttributes[0] && attr.option === selectedOption
          );
        });
      });
    } else {
      if (!_.isEmpty(selectedSize) && !_.isEmpty(selectedColor)) {
        const selectedSizeVariant = variants.filter((variant) => {
          return variant.attributes.find((attr) => {
            return attr.name === 'Size' && attr.option === selectedSize;
          });
        });
        selectedVariant = selectedSizeVariant.find((variant) => {
          return variant.attributes.find((attr) => {
            return attr.name === 'Color' && attr.option === selectedColor;
          });
        });
      }
    }
    if (!_.isEmpty(selectedVariant)) {
      updateStoreStateHandler({
        product: product,
        selectedVariant: selectedVariant,
        addToCartEnabled: selectedVariant.stock_status === 'instock'
      });
    }
  };

  useEffect(() => {
    getProductMetaData(product);
  }, []);

  useEffect(() => {
    if (!_.isEmpty(selectedSize)) {
      selectVariantHandler();
    }
  }, [selectedSize]);

  useEffect(() => {
    if (!_.isEmpty(selectedColor)) {
      selectVariantHandler();
    }
  }, [selectedColor]);

  const renderSizeOptions = sizeOptions.map((item) => (
    <div
      className={`product-options-size mr-3 cursor-pointer ${
        selectedSize === item.name ? 'selected-option' : ''
      }`}
      title={item.name}
      onClick={() => {
        setSelectedSize(item.name);
      }}
    >
      {item.value}
    </div>
  ));

  const renderColorOptions = colorOptions.map((item) => (
    <div
      className="product-options-color mr-3 rounded-circle cursor-pointer"
      style={{backgroundColor: `${item.value}`, borderColor: `${item.value}`}}
      title={item.name}
      onClick={() => {
        setSelectedColor(item.name);
      }}
    ></div>
  ));

  return (
    <>
      {!_.isEmpty(colorOptions) && (
        <div className="py-2">
          <div className="d-flex">
            <div className="text-secondary mr-3">{'Color:'}</div>
            {!selectedColor ? (
              <div className="text-danger">{'Please select'}</div>
            ) : (
              <div className="text-capitalize">{selectedColor}</div>
            )}
          </div>
          <div className="d-flex flex-row pt-2">{renderColorOptions}</div>
        </div>
      )}
      {!_.isEmpty(sizeOptions) && (
        <div className="py-2">
          <div className="d-flex">
            <div className="text-secondary mr-3">{'Size:'}</div>
            {!selectedSize ? (
              <div className="text-danger">{'Please select'}</div>
            ) : (
              <div className="text-capitalize">{selectedSize}</div>
            )}
          </div>
          <div className="d-flex flex-row pt-2">{renderSizeOptions}</div>
        </div>
      )}
    </>
  );
}
