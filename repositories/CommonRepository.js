import Repository, { apiUrl } from "./Repository";

export const fetchStoreCode = () => 
    Repository.get(`/data/store-name?store-name=${apiUrl}`);

export const fetchSetting = () => 
    Repository.get(`/${apiUrl}/data/settings`);

export const fetchConfig = () => 
    Repository.get(`/${apiUrl}/data/configs`);

export const fetchCountries = () => 
    Repository.get(`/${apiUrl}/data/countries`);

export const fetchPaymentGateways = () => 
    Repository.get(`/${apiUrl}/data/payment_gateways`);
