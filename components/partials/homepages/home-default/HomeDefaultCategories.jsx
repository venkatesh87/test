import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';

const HomeDefaultCategories = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  async function getCatgories() {
    const prodCat = await ProductRepository.getProductCategories();
    setCategories(prodCat);
  }

  useEffect(() => {
    getCatgories();
  }, []);

  const handleClick = (e, category) => {
    e.preventDefault();
    const redirectUrl = `/category?id=${category.id}`;
    router.push(redirectUrl);
  };
  return (
    <div className="card-deck cursor-pointer">
      {categories.map((category) => (
        <div
          className="card border-0"
          onClick={(event) => {
            handleClick(event, category);
          }}
        >
          <img
            className="card-img rounded"
            src={category.image.url}
            alt="category image"
          />
          <div className="card-body">
            <a className="ps-link--under">{category.name}</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeDefaultCategories;
