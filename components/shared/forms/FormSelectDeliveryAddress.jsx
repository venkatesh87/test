import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const FormSelectDeliveryAddress = (props) => {
  const {storeState, updateStoreStateHandler} = props;
  const {deliveryAddress} = storeState;
  const {
    register,
    formState: {errors},
    handleSubmit,
    setValue
  } = useForm();

  function submitDeliveryAddress(e) {
    updateStoreStateHandler(e);
  }
  return (
    <form
      className="ps-form--checkout"
      onSubmit={handleSubmit(submitDeliveryAddress)}
    >
      <div className="row">
        <div className="col-md-6">
          <div className="ps-form__billings">
            <h4 className="ps-form__heading">{'Select Delivery Address'}</h4>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'First Name'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    {...register('firstName', {required: true})}
                    defaultValue={deliveryAddress.firstName}
                  />
                  {errors.firstName?.type === 'required' && (
                    <div className="text-danger">
                      {'First name is required'}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'Last Name'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    {...register('lastName', {required: true})}
                    defaultValue={deliveryAddress.lastName}
                  />
                  {errors.lastName?.type === 'required' && (
                    <div className="text-danger">{'Last name is required'}</div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Company Name (optional)'}</label>
                  <input
                    name="companyName"
                    className="form-control"
                    type="text"
                    placeholder=""
                    defaultValue={deliveryAddress.companyName}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'Country'} <sup>*</sup>
                  </label>
                  <select
                    className="ps-select form-control"
                    {...register('country', {required: true})}
                  >
                    <option value="IN">{'India'}</option>
                  </select>
                  {errors.country?.type === 'required' && (
                    <div className="text-danger">{'Country is required'}</div>
                  )}
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'State'} <sup>*</sup>
                  </label>
                  <select
                    className="ps-select form-control"
                    {...register('state', {required: true})}
                  >
                    <option value="AP">{'Andhra Pradesh'}</option>
                    <option value="KA">{'Karnataka'}</option>
                    <option value="KL">{'Kerala'}</option>
                    <option value="TN">{'Tamil Nadu'}</option>
                  </select>
                  {errors.state?.type === 'required' && (
                    <div className="text-danger">{'State is required'}</div>
                  )}
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'Address Line1'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    {...register('addressLine1', {required: true})}
                    placeholder="House number and street name"
                    defaultValue={deliveryAddress.addressLine1}
                  />
                  {errors.addressLine1?.type === 'required' && (
                    <div className="text-danger">
                      {'Address Line1 is required'}
                    </div>
                  )}
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Address Line2'}</label>
                  <input
                    className="form-control"
                    {...register('addressLine2')}
                    placeholder="Apartment, suite, unit etc. (optional)"
                    defaultValue={deliveryAddress.addressLine1}
                  />
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Postcode'}</label>
                  <input
                    className="form-control"
                    {...register('postCode', {required: true})}
                    defaultValue={deliveryAddress.postCode}
                  />
                  {errors.postCode?.type === 'required' && (
                    <div className="text-danger">{'Postcode is required'}</div>
                  )}
                </div>
              </div>
              <div className="col-sm-12">
                <div className="form-group">
                  <label>
                    {'Town / City'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    {...register('city', {required: true})}
                    defaultValue={deliveryAddress.city}
                  />
                  {errors.city?.type === 'required' && (
                    <div className="text-danger">{'City is required'}</div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'Email'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    {...register('email', {required: true})}
                    defaultValue={deliveryAddress.email}
                  />
                  {errors.email?.type === 'required' && (
                    <div className="text-danger">{'Email is required'}</div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    {'Phone'} <sup>*</sup>
                  </label>
                  <input
                    className="form-control"
                    {...register('phone', {required: true})}
                    defaultValue={deliveryAddress.phone}
                  />
                  {errors.phone?.type === 'required' && (
                    <div className="text-danger">{'Phone is required'}</div>
                  )}
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
              {/* <div className="col-sm-12">
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
              </div> */}
              <div className="col-sm-12">
                <div className="form-group">
                  <label>{'Order notes (optional)'}</label>
                  <textarea
                    name="orderNotes"
                    className="form-control"
                    rows="6"
                    defaultValue={deliveryAddress.orderNotes}
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-end pt-9">
            <div className="card card w-50 text-center">
              <div className="card-body">
                <button
                  className="ps-btn ps-btn--fullwidth ps-btn--black mb-3"
                  type="submit"
                >
                  {'Continue'}
                </button>
                <p>{"You can review this order before it's final."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default FormSelectDeliveryAddress;
