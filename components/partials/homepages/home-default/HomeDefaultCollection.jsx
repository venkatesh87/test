import React, {useState, useEffect} from 'react';
import {useRouter} from 'next/router';

const HomeDefaultCollection = ({templates}) => {
  const [bannerSettings, setBannerSettings] = useState([]);
  const router = useRouter();
  useEffect(() => {
    if (!_.isEmpty(templates)) {
      const widget = templates.find((template) => {
        return template.type === 'banners';
      });
      const banners = widget.fields.find((field) => {
        return field.key === 'images';
      });
      setBannerSettings(banners.value);
    }
  }, []);
  const handleClick = (e, banner) => {
    e.preventDefault();
    const {action} = banner;
    let redirectUrl = '#';
    if (action.type === 'category') {
      redirectUrl = `/${action.type}?id=${action.id}`;
    } else {
      redirectUrl = `/${action.type}/${action.id}`;
    }
    router.push(redirectUrl);
  };
  return (
    <div className="ps-section">
      <div className="container">
        <div className="ps-section__header">
          <figure>
            <figcaption>{'Offers'}</figcaption>
            <p>{'Check out the latest offers'}</p>
          </figure>
        </div>
        <div className="card-deck cursor-pointer">
          {bannerSettings.map((banner) => (
            <div
              className="card"
              onClick={(event) => {
                handleClick(event, banner);
              }}
            >
              <img
                className="card-img"
                src={banner.image.en}
                alt="banner image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDefaultCollection;
