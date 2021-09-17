import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

const WidgetShopSubCategories = ({categoryName, subCategories}) => {
  const router = useRouter();
  const [subCategoriesList, setSubCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!_.isEmpty(subCategories)) {
      setSubCategoriesList(subCategories);
      setTimeout(function () {
        setLoading(false);
      }, 200);
    }
  }, []);

  // Views
  let subCategoriesView;
  if (!loading) {
    if (subCategoriesList && subCategoriesList.length > 0) {
      subCategoriesView = subCategoriesList.map((item) => (
        <li key={item.id}>
          <Link href={`/category?slug=${item.id}`}>
            <a
              //   className={`ps-link--line ${
              //     slug && slug === item.slug ? 'active' : ''
              //   }`}
              className={`ps-link--line `}
            >
              {item.name}
            </a>
          </Link>
        </li>
      ));
    } else {
      subCategoriesView = <p>{'No category found.'}</p>;
    }
  } else {
    subCategoriesView = <p>{'Loading...'}</p>;
  }

  return (
    <aside className="widget widget_shop widget_categories">
      <h3 className="widget-title">{categoryName}</h3>
      <ul className="ps-list--under">{subCategoriesView}</ul>
    </aside>
  );
};

export default WidgetShopSubCategories;
