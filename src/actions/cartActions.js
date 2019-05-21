import * as types from './actionTypes';

export function removeFromCart(json) {
    return {
        type: types.REMOVE_FROM_CART,
        cart: json.cart
    };
}

export function addToCart(json) {
    return {
        type: types.ADD_TO_CART,
        cart: json.cart
    };
}