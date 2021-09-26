import { combineReducers } from 'redux';
import cart from './cart/reducer';
import compare from './compare/reducer';
import wishlist from './wishlist/reducer';
import app from './app/reducer';
import shop from './shop/reducer';
import common from './common/reducer';
import auth from './auth/reducer';

export default combineReducers({
    auth,
    cart,
    common,
    compare,
    wishlist,
    app,
    shop,
});
