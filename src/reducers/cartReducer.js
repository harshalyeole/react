import initialState from './initialState';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/actionTypes';

export default function cart(state = initialState.cart, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return action.cart;
    case REMOVE_FROM_CART:
      return action.cart;
    default:
      return state;
  }
}