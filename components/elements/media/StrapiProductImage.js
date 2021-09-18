import React from 'react';
import { baseUrl, baseUrlProduct } from '~/repositories/Repository';

const StrapiProductImage = ({ url, alt = 'image' }) => {
    return <img src={url} alt={alt} />;
};

export default StrapiProductImage;
