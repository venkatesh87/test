import React from 'react';
import _ from 'lodash';

const ModuleDetailDescription = ({product}) => {
  return (
    <div className="row">
      <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 ">
        <div className="ps-document">
          <h4>{'Introduction'}</h4>
          <p>
            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
          </p>
          <h4>{'Features'}</h4>
          <ul>
            <li>{'Lorem ipsum dolor sit amet'}</li>
            <li>
              {
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
              }
            </li>
            <li>{'Ut enim ad minim veniam'}</li>
            <li>
              {
                'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
              }
            </li>
            <li>{'Lorem ipsum dolor sit amet'}</li>
          </ul>
        </div>
      </div>

      <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 col-12 ">
        {!_.isEmpty(product.images) && (
          <img src={product.images[0].url} alt={product.name} />
        )}
      </div>
    </div>
  );
};

export default ModuleDetailDescription;
