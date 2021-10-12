import React, {useState, useEffect} from 'react';
import CartRepository from '~/repositories/CartRepository';
import _ from 'lodash';

export default function ModulePaymentMethods(props) {
  const {storeState, updateStoreState, goToNextStep, goToPreviousStep} = props;
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    if (
      !_.isEmpty(storeState.paymentMethod) &&
      !_.isEmpty(storeState.paymentMethod.id)
    ) {
      setSelectedPaymentMethod(storeState.paymentMethod.id);
    }
  }, []);

  const updateStoreStateHandler = (param) => {
    const targetPaymentMethod = paymentMethods.find((pm) => {
      return pm.id === param;
    });
    storeState.paymentMethod = {...targetPaymentMethod};
    updateStoreState(storeState);
  };

  const goToNextStepHandler = () => {
    goToNextStep();
  };
  const goToPreviousStepHandler = () => {
    goToPreviousStep();
  };
  const getPaymentMethods = async () => {
    const response = await CartRepository.getPaymentMethods();
    setPaymentMethods(response);
  };
  useEffect(() => {
    getPaymentMethods();
  }, []);

  const onChangeHandler = (e) => {
    setSelectedPaymentMethod(e.target.id);
    setShowErrorMessage(false);
  };

  const submitPaymentMethod = (e) => {
    if (!_.isEmpty(selectedPaymentMethod)) {
      setShowErrorMessage(false);
      updateStoreStateHandler(selectedPaymentMethod);
      goToNextStepHandler();
    } else {
      setShowErrorMessage(true);
    }
  };

  let paymentMethodsView = null;
  if (!_.isEmpty(paymentMethods)) {
    paymentMethodsView = paymentMethods.map((pm) => (
      <div key={pm.id} className="ps-radio">
        <input
          className="form-control"
          type="radio"
          name="paymentMethod"
          id={pm.id}
          onChange={(e) => {
            onChangeHandler(e);
          }}
          checked={pm.id === selectedPaymentMethod}
        />
        <label htmlFor={pm.id}>{pm.method_title}</label>
      </div>
    ));
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col-md-6">
              <div className="ps-form__billings">
                <h4 className="ps-form__heading">{'Select Payment Method'}</h4>
                <div className="row">
                  <div className="col">
                    <figure className="ps-block__payment-methods">
                      {paymentMethodsView}
                      {showErrorMessage && (
                        <div className="text-danger">
                          {'Please select a payment method'}
                        </div>
                      )}
                      <p className="pt-2">
                        {`Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our`}
                        <a href="#"> {'privacy policy.'}</a>
                      </p>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-end">
                <div className="card card w-50 text-center">
                  <div className="card-body">
                    <button
                      className="ps-btn ps-btn--fullwidth ps-btn--black mb-3"
                      onClick={(e) => {
                        submitPaymentMethod(e);
                      }}
                    >
                      {'Continue'}
                    </button>
                    <button
                      className="ps-btn ps-btn--fullwidth ps-btn--black mb-3"
                      onClick={() => {
                        goToPreviousStepHandler();
                      }}
                    >
                      {'Back'}
                    </button>
                    <p>{"You can review this order before it's final."}</p>
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
