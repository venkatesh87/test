import React, {useState, useEffect} from 'react';
import ProductRepository from '~/repositories/ProductRepository';

const ModuleShopCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCatgories() {
    const SPCategories = await ProductRepository.getProductCategories();
    if (SPCategories) {
      setCategories(SPCategories);
      setTimeout(function () {
        setLoading(false);
      }, 200);
    } else {
      return null;
    }
  }

  useEffect(() => {
    getCatgories();
  }, []);

  let categoriesView;
  if (!loading) {
    if (categories && categories.length > 0) {
      categoriesView = categories.map((category) => (
        <figure key={category.id} className="wide">
          <div className="ps-block--collection">
            <a
              className="ps-block__overlay bg--top-right"
              href={`/category?name=${category.name}&id=${category.id}`}
              style={{
                backgroundImage: `url(${category.image.url})`
              }}
              data-background="img/collection/shop/category-1.jpg"
            ></a>
            <p>{category.description}</p>
            <h5>{category.name}</h5>
          </div>
        </figure>
      ));
    } else {
      categoriesView = <p>{'No category found.'}</p>;
    }
  } else {
    categoriesView = <p>{'Loading...'}</p>;
  }

  return (
    <div className="ps-home-categories ps-shop--categories">
      <div className="container">
        <div className="ps-shop__content">{categoriesView}</div>
      </div>
    </div>
  );
};

export default ModuleShopCategories;
