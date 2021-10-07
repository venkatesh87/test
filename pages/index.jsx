import React, {useState, useEffect} from 'react';
import ContainerHomeDefault from '~/components/layouts/ContainerHomeDefault';
import Subscribe from '~/components/shared/sections/Subscribe';
import HomeDefaultCollection from '~/components/partials/homepages/home-default/HomeDefaultCollection';
import InstagramImages from '~/components/shared/sections/InstagramImages';
import HomeBlog from '~/components/shared/sections/HomeBlog';
import HomeDefaultDealOfDay from '~/components/partials/homepages/home-default/HomeDefaultDealOfDayv2';
import HomeDefaultNewArrival from '~/components/partials/homepages/home-default/HomeDefaultNewArrival';
import HomeDefaultBanner from '~/components/partials/homepages/home-default/HomeDefaultBanner';
import HomeDefaultTopSellers from '~/components/partials/homepages/home-default/HomeDefaultTopSellers';
import HomeDefaultCategories from '~/components/partials/homepages/home-default/HomeDefaultCategories';
import _ from 'lodash';
import SettingsRepository from '~/repositories/SettingsRepository';

const HomeDefaultPage = () => {
  const [templates, setTemplates] = useState([]);

  async function getTemplates() {
    const contentTemplates = await SettingsRepository.getContentTemplates();
    setTemplates(contentTemplates);
  }
  useEffect(() => {
    getTemplates();
  }, []);
  return (
    <ContainerHomeDefault title="Shopping Undefined">
      {!_.isEmpty(templates) && (
        <div className="container">
          <HomeDefaultBanner templates={templates} />
          <div className="py-4">
            <HomeDefaultCollection templates={templates} />
          </div>
          <div className="py-4">
            <HomeDefaultCategories />
          </div>
          <div className="py-4">
            <HomeDefaultNewArrival templates={templates} />
          </div>
          <div className="py-4">
            <HomeDefaultDealOfDay templates={templates} />
          </div>
        </div>
      )}

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
