import requestV1 from 'src/utils/fetch-api';
import {STORE_NAME} from 'src/config/development';
export const fetchStoreCode = () => requestV1.get(`/data/store-name?store-name=${STORE_NAME}`);
export const fetchSetting = () => requestV1.get(`/${STORE_NAME}/data/settings`);
export const fetchConfig = () => requestV1.get(`/${STORE_NAME}/data/configs`);
export const fetchCountries = () => requestV1.get(`/${STORE_NAME}/data/countries`);
export const fetchPaymentGateways = () => requestV1.get(`/${STORE_NAME}/data/payment_gateways`);