import React, {useState, useEffect} from 'react';
import CartRepository from '~/repositories/CartRepository';
import _ from 'lodash';

export default function ModulePaymentMethods(props) {
  const {selectedPaymentMethodHandler, showErrorMessage} = props;
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const getPaymentMethods = async () => {
    const response = await CartRepository.getPaymentMethods();
    setPaymentMethods(response);
  };
  useEffect(() => {
    getPaymentMethods();
  }, []);

  const onChangeHandler = (e) => {
    selectedPaymentMethodHandler(e.target.id);
  };

  let paymentMethodsView = null;
  if (!_.isEmpty(paymentMethods)) {
    paymentMethodsView = paymentMethods.map((pm) => (
      <div key={pm.id} className="ps-radio">
        <input
          className="form-control"
          type="radio"
          id={pm.id}
          name="payment-method"
          onChange={(e) => {
            onChangeHandler(e);
          }}
          required
        />
        <label htmlFor={pm.id}>{pm.method_title}</label>
      </div>
    ));
  }
  return (
    <>
      <figure className="ps-block__payment-methods">
        {paymentMethodsView}
        {showErrorMessage && (
          <div className="text-danger">{'Please select a payment method'}</div>
        )}
        <p>
          {`Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our`}
          <a href="#"> {'privacy policy.'}</a>
        </p>
      </figure>
    </>
  );
}
