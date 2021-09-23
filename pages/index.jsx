import React, {useState, useEffect} from 'react';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import Subscribe from '~/components/shared/sections/Subscribe';
import HomeDefaultCollection from '~/components/partials/homepages/home-default/HomeDefaultCollection';
import InstagramImages from '~/components/shared/sections/InstagramImages';
import HomeBlog from '~/components/shared/sections/HomeBlog';
import HomeDefaultDealOfDay from '~/components/partials/homepages/home-default/HomeDefaultDealOfDay';
import HomeDefaultNewArrival from '~/components/partials/homepages/home-default/HomeDefaultNewArrival';
import HomeDefaultBanner from '~/components/partials/homepages/home-default/HomeDefaultBanner';
import HomeDefaultTopSellers from '~/components/partials/homepages/home-default/HomeDefaultTopSellers';
import _ from 'lodash';

const HomeDefaultPage = () => {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    fetch('https://service.lightbooks-dev.io/thehouseoffa/data/settings')
      .then((response) => response.json())
      .then((data) => {
        setTemplates(data.templates[0].data);
      });
  }, []);
  return (
    <ContainerHomeDefault title="Minimalist eCommerce React Template">
      {!_.isEmpty(templates) && <HomeDefaultBanner templates={templates} />}
      {/* <HomeDefaultCollection />
            <HomeDefaultTopSellers collectionSlug="home-default-top-seller" />
            <HomeDefaultNewArrival collectionSlug="new-arrival" />
            <HomeDefaultDealOfDay />
            <HomeBlog />
            <Subscribe />
            <InstagramImages /> */}
    </ContainerHomeDefault>
  );
};

export default HomeDefaultPage;
