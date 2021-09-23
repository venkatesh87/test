import React, {useEffect, useState} from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ModuleShopActions from '~/components/partials/shop/modules/ModuleShopActions.jxs';
import ProductRepository from '~/repositories/ProductRepository.js';
import DrawerShopFilter from '~/components/shared/drawers/DrawerShopFilter';
import {useRouter} from 'next/router';
import ModuleSidebarCategories from '~/components/partials/shop/modules/ModuleSidebarCategories';
import ModuleShopContent from '~/components/partials/shop/modules/ModuleShopContent';
import Product from '~/components/elements/products/Product';
import _ from 'lodash';

const CategoryPage = () => {
  const router = useRouter();
  const [category, setCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const [loading, setLoading] = useState(true);

  async function getProductList(categoryId, categoryName) {
    const responseData = await ProductRepository.getProductsByCategory(
      categoryId
    );
    if (responseData) {
      let subCategoryList = [];
      for (const product of responseData) {
        subCategoryList.push(...product.categories);
      }
      setSubCategories(_.uniqWith(subCategoryList, _.isEqual));
      setProducts(responseData);
      setCategoryName(categoryName);

      setTimeout(function () {
        setLoading(false);
      }, 200);
    } else {
      return null;
    }
  }

  useEffect(() => {
    const {id, name} = router.query;
    if (id) {
      getProductList(id, name);
    }
  }, []);

  const breadcrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: categoryName
    }
  ];

  let shopItemsView;

  if (!loading) {
    if (products.length > 0) {
      shopItemsView = products.map((item) => (
        <div className="col-md-4 col-sm-6 col-6" key={item.id}>
          <Product product={item} />
        </div>
      ));
    } else {
      shopItemsView = <p>{'No Product found.'}</p>;
    }
  } else {
    shopItemsView = <p>{'Loading data...'}</p>;
  }

  return (
    <ContainerPage
      title={!_.isEmpty(categoryName) ? categoryName : 'Loading ...'}
    >
      <div className="ps-shop ps-shop--sidebar">
        <div className="container">
          <div className="ps-shop__container">
            {!_.isEmpty(subCategories) && (
              <ModuleSidebarCategories
                categoryName={categoryName}
                subCategories={subCategories}
              />
            )}
            <div className="ps-shop__wrapper">
              <ModuleShopContent />
              <div className="ps-shop__header">
                <div className="ps-shop__left">
                  <h1>ShopV1</h1>
                  <BreadCrumb breacrumb={breadcrumb} />
                </div>
                <ModuleShopActions
                  total={
                    category && category.products.length > 0
                      ? category.products.length
                      : 0
                  }
                />
              </div>
              <div className="ps-shop__content">
                <div className="ps-shop-items row">{shopItemsView}</div>
              </div>
              <div className="ps-shop__footer">
                <a className="ps-link--under" href="#">
                  {'Discover more'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DrawerShopFilter />
    </ContainerPage>
  );
};

CategoryPage.getInitialProps = async ({query}) => {
  return {query: query};
};

export default CategoryPage;
