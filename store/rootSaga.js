import { all } from 'redux-saga/effects';
import CartSaga from './cart/saga';
import CompareSaga from './compare/saga';
import WishlistSaga from './wishlist/saga';
import AppSaga from './app/saga';
import ShopSaga from './shop/saga';
import CommonSaga from './common/saga';
import AuthSaga from './auth/saga';

export default function* rootSaga() {
    yield all([
        CartSaga(),
        CompareSaga(),
        WishlistSaga(),
        AppSaga(),
        ShopSaga(),
        CommonSaga(),
        AuthSaga()
    ]);
}
