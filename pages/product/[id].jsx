import React, {useEffect, useState} from 'react';
import Router, {useRouter} from 'next/router';
import ProductRepository from '~/repositories/ProductRepository';
import SkeletonProductDetail from '~/components/elements/skeletons/SkeletonProductDetail';
import ProductDetail from '~/components/elements/products/ProductDetail';
import RelatedProducts from '~/components/partials/products/RelatedProducts';
import BreadCrumb from '~/components/elements/BreadCrumb';
import ContainerProductDetailPage from '~/components/layouts/ContainerProductDetailPage';

const ProductDetailPage = ({query}) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getProduct(productID) {
    const SPProduct = await ProductRepository.getProductById(productID);
    if (SPProduct) {
      setProduct(SPProduct);

      setTimeout(function () {
        setLoading(false);
      }, 200);
    } else {
      await router.push('/page/page-404', '/404');
    }
    return SPProduct;
  }

  async function getProductOnChangeURL(url) {
    const nextPid = url.split('/').pop();
    if (nextPid !== '' && isNaN(parseInt(nextPid)) === false) {
      setLoading(true);
      await getProduct(nextPid);
    }
  }

  useEffect(() => {
    const {id} = query;

    if (id) {
      getProduct(id);
    }

    router.events.on('routeChangeStart', getProductOnChangeURL);

    return () => {
      router.events.off('routeChangeStart', getProductOnChangeURL);
    };
  }, []);

  // View area
  let productView;
  const breadCrumb = [
    {
      text: 'Home',
      url: '/'
    },
    {
      text: 'Shop',
      url: '/shop'
    },
    {
      text: product ? product.name : 'loading...'
    }
  ];
  if (loading || product === null) {
    productView = (
      <div className="container">
        <SkeletonProductDetail />
      </div>
    );
  } else {
    productView = (
      <>
        <ProductDetail product={product} />
        <RelatedProducts product={product} />
      </>
    );
  }

  return (
    <ContainerProductDetailPage title="Product">
      <div className="ps-page ps-page--product-detail">
        <div className="container">
          <div className="ps-page__header">
            <BreadCrumb breacrumb={breadCrumb} />
          </div>
          <div className="ps-page__content">{productView}</div>
        </div>
      </div>
    </ContainerProductDetailPage>
  );
};

ProductDetailPage.getInitialProps = async ({query}) => {
  return {query: query};
};

export default ProductDetailPage;
