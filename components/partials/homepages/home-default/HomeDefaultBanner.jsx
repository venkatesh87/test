import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import NextArrow from '~/components/elements/carousel/NextArrow';
import PrevArrow from '~/components/elements/carousel/PrevArrow';
import _ from 'lodash';

const HomeDefaultBanner = (props) => {
  const {templates} = props;
  const [sliderSettings, setSliderSettings] = useState([]);

  useEffect(() => {
    if (!_.isEmpty(templates)) {
      const widget = templates.find((template) => {
        return template.type === 'slideshow';
      });
      const sliderSettings = widget.fields.find((field) => {
        return field.key === 'images';
      });
      setSliderSettings(sliderSettings.value);
    }
  }, []);

  const carouselSetting = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className="ps-home-banner">
      <Slider {...carouselSetting} className="ps-carousel">
        {sliderSettings.map((slider) => (
          <div className="carousel-item">
            <div
              className="ps-banner--3"
              style={{
                background: `url(${slider.image.en})`
              }}
            ></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeDefaultBanner;
