import Repository, { apiUrl } from './Repository';

/**
 * API login with email and password
 * @param username
 * @param password
 * @returns {Promise<unknown>}
 */
export const loginWithEmail = ({username, password}) =>
  Repository.post(`/${apiUrl}/v1/login`, {username, password});

/**
 * Login with Firebase
 * @param idToken Firebase user id token
 * @returns {Promise<unknown>}
 */
export const loginWithMobile = idToken =>
  Repository.post(`/${apiUrl}/v1/login-otp`, {idToken});

export const loginWithFacebook = token =>
  Repository.post(`/${apiUrl}/v1/facebook`, {token});

export const loginWithGoogle = user =>
  Repository.post(`/${apiUrl}/v1/google`, user);

export const loginWithApple = data =>
  Repository.post(`/${apiUrl}/v1/apple`, data);

export const registerWithEmail = data =>
  Repository.post(`/${apiUrl}/v1/register`, data);

export const forgotPassword = user_login =>
  Repository.post(`/${apiUrl}/v1/lost-password`, {user_login});

export const changePassword = ({password_old, password_new}) =>
  Repository.post(`/${apiUrl}/v1/change-password`, {
    password_old,
    password_new,
  });

export const changeEmail = ({u_password, u_email}) =>
  Repository.patch('users/change-email', {u_password, u_email});

export const updateCustomer = (user_id, data) =>
  Repository.put(`/${apiUrl}/v1/customers/${user_id}`, data);

export const getCustomer = user_id =>
  Repository.get(`/${STORE_NAME}/customers/${user_id}`);

export const logout = () => Repository.get(`/api/v1/logout`);

export const isLogin = () => Repository.get(`/${apiUrl}/v1/current`);

export const checkPhoneNumber = data =>
  Repository.post(`/${apiUrl}/v1/check-phone-number`, data);

export const verifyOTP = data =>
  Repository.post(`/${apiUrl}/v1/verify-otp`, data);

export const checkInfo = data =>
  Repository.post(`/${apiUrl}/v1/check-info`, data);