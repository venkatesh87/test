import React, {useEffect, useState} from 'react';
import ModuleCheckOutCartSummary from '~/components/shared/forms/modules/ModuleCheckOutCartSummary';
import ModuleCheckoutOrderSummary from '~/components/shared/forms/modules/ModuleCheckoutOrderSummary';
import {submitOrder} from '~/utilities/ecomerce-helpers';

export default function ModuleSubmitOrder(props) {
  const {
    storeState,
    updateStoreState,
    goToNextStep,
    goToPreviousStep
  } = props;

  const goToPreviousStepHandler = () => {
    goToPreviousStep();
  };

  const placeOrder = async () => {
    const order = await submitOrder(storeState);
    if (order) {
      updateStoreStateHandler(order.orderNumber);
      goToNextStep();
    }
  };

  const updateStoreStateHandler = (param) => {
    storeState.orderNumber = param;
    updateStoreState(storeState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md-6">
              <div className="ps-form__billings">
                <h4 className="ps-form__heading">{'Review your order'}</h4>
                <div className="row">
                  <div className="col">
                    <div class="card">
                      <div class="card-body">
                        <div className="d-flex">
                          <div className="px-2">{'Payment Method:'}</div>
                          <div>{storeState.paymentMethod.title}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <ModuleCheckOutCartSummary />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end pt-5">
                <div className="card card w-50 text-center">
                  <div className="card-body">
                    <button
                      className="ps-btn ps-btn--fullwidth ps-btn--black"
                      onClick={() => {
                        placeOrder();
                      }}
                    >
                      {'Place order'}
                    </button>
                    <button
                      className="ps-btn ps-btn--fullwidth ps-btn--black my-2"
                      onClick={() => {
                        goToPreviousStepHandler();
                      }}
                    >
                      {'Back'}
                    </button>
                    <p>{storeState.paymentMethod.description}</p>
                    <ModuleCheckoutOrderSummary />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
