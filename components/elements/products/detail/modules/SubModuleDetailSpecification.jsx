import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import _ from 'lodash';

const SubModuleDetailSpecification = ({product}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let categoryList = [];
    for (const category of product.categories) {
      categoryList.push(category);
    }
    setCategories(_.uniqWith(categoryList, _.isEqual));
  }, []);
  return (
    <div className="ps-product__specification">
      <p>
        <strong>{'CATEGORY:'}</strong>
        {categories.map((category) => (
          <Link href={`/category?name=${category.name}&id=${category.id}`}>
            <a>{category.name}</a>
          </Link>
        ))}
      </p>
      <p>
        <strong>{'Tags:'}</strong>
        <Link href="/shop">
          <a>{'TODO'}</a>
        </Link>
      </p>
    </div>
  );
};

export default SubModuleDetailSpecification;
