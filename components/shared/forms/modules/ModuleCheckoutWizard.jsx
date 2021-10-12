import React, {createContext, useState} from 'react';
import {Wizard, Steps, Step} from 'react-albus';
import ModuleCheckOutDeliveryAddress from '~/components/shared/forms/modules/ModuleCheckOutDeliveryAddress';
import ModulePaymentMethods from '~/components/shared/forms/modules/ModulePaymentMethods';
import ModuleSubmitOrder from '~/components/shared/forms/modules/ModuleSubmitOrder';
import CheckoutSuccessPage from "~/pages/shop/checkout-success";


const initialCheckoutSetup = {
  deliveryAddress: {
    firstName: null,
    lastName: null,
    companyName: '',
    addressLine1: null,
    addressLine2: '',
    city: null,
    postCode: null,
    state: null,
    country: null,
    email: null,
    phone: null,
    orderNotes: ''
  },
  paymentMethod: {
    id: null,
    title: null,
    description: null
  },
  orderNumber: null
};

const CheckoutSetupContext = createContext(initialCheckoutSetup);

export default function CheckoutSetupWizard() {
  const [storeState, setStoreState] = useState(initialCheckoutSetup);
  const updateStoreState = (data) => {
    setStoreState({...data});
  };
  const updateStoreStateHandler = (data) => {
    updateStoreState(data);
  };
  return (
    <>
      <CheckoutSetupContext.Provider value={(storeState, updateStoreState)}>
        <Wizard
          render={(wizardContext) => (
            <>
              <Steps>
                <Step
                  id="step1"
                  render={({next}) => (
                    <>
                      <ModuleCheckOutDeliveryAddress
                        wizardContext={wizardContext}
                        storeState={storeState}
                        updateStoreState={updateStoreStateHandler}
                        goToNextStep={next}
                      />
                    </>
                  )}
                />
                <Step
                  id="step2"
                  render={({next, previous}) => (
                    <ModulePaymentMethods
                      wizardContext={wizardContext}
                      storeState={storeState}
                      updateStoreState={updateStoreStateHandler}
                      goToNextStep={next}
                      goToPreviousStep={previous}
                    />
                  )}
                />
                <Step
                  id="step3"
                  render={({next, previous}) => (
                    <ModuleSubmitOrder
                      wizardContext={wizardContext}
                      storeState={storeState}
                      updateStoreState={updateStoreStateHandler}
                      goToNextStep={next}
                      goToPreviousStep={previous}
                    />
                  )}
                />
                <Step
                  id="step4"
                  render={() => (
                    <CheckoutSuccessPage
                      wizardContext={wizardContext}
                      storeState={storeState}
                      updateStoreState={updateStoreStateHandler}
                    />
                  )}
                />
              </Steps>
            </>
          )}
        />
      </CheckoutSetupContext.Provider>
    </>
  );
}
