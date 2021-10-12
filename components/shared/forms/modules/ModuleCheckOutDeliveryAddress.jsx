import React from 'react';
import FormSelectDeliveryAddress from '~/components/shared/forms/FormSelectDeliveryAddress';

export default function ModuleCheckOutDeliveryAddress(props) {
  const {storeState, updateStoreState, goToNextStep, wizardContext} = props;

  const updateStoreStateHandler = (param) => {
    storeState.deliveryAddress = {...param};
    updateStoreState(storeState);
    stepNavigationHandler();
  };

  const stepNavigationHandler = () => {
    goToNextStep();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <FormSelectDeliveryAddress
            storeState={storeState}
              updateStoreStateHandler={updateStoreStateHandler}
            />
          </div>
        </div>
      </div>
    </>
  );
}
