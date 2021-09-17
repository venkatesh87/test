import { combineReducers } from 'redux';
import cart from './cart/reducer';
import compare from './compare/reducer';
import wishlist from './wishlist/reducer';
import app from './app/reducer';
import shop from './shop/reducer';
import common from './common/reducer';

export default combineReducers({
    cart,
    common,
    compare,
    wishlist,
    app,
    shop,
});
