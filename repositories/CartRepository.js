import Repository, {
  baseUrl,
  baseUrlProduct,
  serializeQuery
} from './Repository';
import _ from 'lodash';

class CartRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getCartItemsByCartKey(cartKey) {
    const reponse = await Repository.get(
      `${baseUrl}/thehouseoffa/carts?cart_key=${cartKey}`
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({error: JSON.stringify(error)}));
    return reponse;
  }

  async addToCart(cartKey, cartItem) {
    const apiUri = !_.isEmpty(cartKey)
      ? `${baseUrl}/thehouseoffa/carts/${cartKey}`
      : `${baseUrl}/thehouseoffa/carts`;
    const reponse = await Repository.post(apiUri, cartItem)
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({error: JSON.stringify(error)}));
    return reponse;
  }

  async updateCartItemQty(cartKey, cartItem) {
    const reponse = await Repository.post(
      `${baseUrl}/thehouseoffa/carts/set-quantity?cart_key=${cartKey}`,
      cartItem
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({error: JSON.stringify(error)}));
    return reponse;
  }

  async removeCartItem(cartKey, cartItem) {
    const reponse = await Repository.post(
      `${baseUrl}/thehouseoffa/carts/remove-cart-item?cart_key=${cartKey}`,
      cartItem
    )
      .then((response) => {
        return response.data;
      })
      .catch((error) => ({error: JSON.stringify(error)}));
    return reponse;
  }
}

export default new CartRepository();
