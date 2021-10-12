import React from 'react';
// import ModuleCheckoutSummary from '~/components/shared/forms/modules/ModuleCheckoutOrderSummary';

const FormCheckout = () => {
  function placeOrder(e) {
    e.preventDefault();
  }
  return (
    <form className="ps-form--checkout" onSubmit={placeOrder}>
      <div className="row">
        <div className="col-md-6">
          <div className="ps-form__billings">
            <h4 className="ps-form__heading">{'Billing Address'}</h4>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'First Name'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'Last Name'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Company Name (optional)'}</label>
                  <input className="form-control" type="text" placeholder="" />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'Country'} <sup>*</sup>
                  </label>
                  <select className="ps-select form-control" required>
                    <option value="1">USA</option>
                    <option value="2">England</option>
                    <option value="3">Japan</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'Street address'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="House number and street name"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Postcode'}</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    required
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'Town / City'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'Email'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'Phone'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=""
                    required
                  />
                </div>
              </div>
              {/* <div className="col-sm-12">
                                <div className="form-group create-account">
                                    <div className="ps-checkbox">
                                        <input
                                            className="form-control"
                                            type="checkbox"
                                            id="createAccount"
                                            name="createAccount"
                                        />
                                        <label htmlFor="createAccount">
                                            Create An account
                                        </label>
                                    </div>
                                </div>
                            </div> */}
              <div className="col-sm-12">
                <div className="form-group shipping">
                  <div className="ps-checkbox">
                    <input
                      className="form-control"
                      type="checkbox"
                      id="shipping"
                      name="shipping"
                    />
                    <label htmlFor="shipping">
                      <strong>{'Shipping to different Address'}</strong>
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Order notes (optional)'}</label>
                  <textarea className="form-control" rows="6"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="ps-form__orders">
            <h3>{'Your order'}</h3>
            {/* <ModuleCheckoutSummary /> */}
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormCheckout;
