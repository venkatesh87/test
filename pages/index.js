import React from "react";
import { connect } from "react-redux";
import ContainerHomeClassic from "~/components/layouts/ContainerHomeClassic";
import SiteFeatures from "~/components/shared/sections/SiteFeatures";
import HomeBlog from "~/components/shared/sections/HomeBlog";
import Subscribe from "~/components/shared/sections/Subscribe";
import HomeClassicPromotions from "~/components/partials/homepages/home-classic/HomeClassicPromotions";
import HomeClassicProducts from "~/components/partials/homepages/home-classic/HomeClassicProducts";
import HomeClassicCategories from "~/components/partials/homepages/home-classic/HomeClassicCategories";
import HomeClassicBanners from "~/components/partials/homepages/home-classic/HomeClassicBanners";

import Widgetslideshow from "~/components/shared/widgets/homepage/Widgetslideshow";
import { dataConfigSelector } from "~/store/common/selectors";

const WIDGETS = {
    // slideshow: Widgetslideshow,
    // categories: CategoryList,
    // products: ProductList,
    // productcategory: ProductCategory,
    // banners: Banners,
    // text: TextInfo,
    // countdown: CountDown,
    // blogs: BlogList,
    // testimonials: Testimonials,
    // button: Button,
    // vendors: Vendors,
    // search: Search,
    // divider: Divider,
};

function renderWidgets(config) {
    const Container = WIDGETS[config.type];
    if (!Container) {
      return null;
    }
    return (
      <div key={config.id} style={config.spacing && config.spacing}>
        <Container
            key={config.id}
            {...config}
        />
      </div>
    );
}

const Home = (props) => {
  const { config } = props;
  console.log('config: ', config);
  return (
    <ContainerHomeClassic title="Home Classic">
        {config.map(data => renderWidgets(data))}
        <HomeClassicBanners />
        <SiteFeatures />
        <HomeClassicCategories />
        <HomeClassicProducts />
        <HomeClassicPromotions />
        <HomeBlog />
        <Subscribe />
    </ContainerHomeClassic>
  );
};

const mapStateToProps = (state) => {
  return {
    config: dataConfigSelector(state),
  };
};

export default connect(mapStateToProps)(Home);
