import React from 'react';
import ContainerPage from '~/components/layouts/ContainerPage';
import WidgetSlideshow from "~/components/shared/widgets/homepage/Widgetslideshow";
import HomeDefaultBanner from "~/components/partials/homepages/home-default/HomeDefaultBanner";
import HomeFullwidthBanners from "~/components/partials/homepages/home-fullwidth/HomeFullwidthBanners";
import HomeModermBanners from "~/components/partials/homepages/home-moderm/HomeModermBanners";
import HomeSimpleBanners from "~/components/partials/homepages/home-simple/HomeSimpleBanners";

const Slideshow = () => {
    return (
        <ContainerPage title="Banners">
            <WidgetSlideshow/>
            <HomeDefaultBanner/>
            <HomeFullwidthBanners/>
            <HomeModermBanners/>
            <HomeSimpleBanners/>
        </ContainerPage>
    );
};

export default Slideshow;
