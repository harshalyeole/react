import * as types from './actionTypes';

export function removeFromCart(cart) {
    return {
        type: types.REMOVE_FROM_CART,
        cart: cart
    };
}

export function addToCart(cart) {
    return {
        type: types.ADD_TO_CART,
        cart: cart
    };
}