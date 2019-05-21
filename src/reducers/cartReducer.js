import initialState from './initialState';
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions/actionTypes';

export default function cart(state = initialState.cart, action) {
  let newState;
  switch (action.type) {
    case ADD_TO_CART:
      console.log('ADD_TO_CART Action')
      return action;
    case REMOVE_FROM_CART:
      newState = action.cart;
      console.log('REMOVE_FROM_CART Action')
      return newState;
    default:
      return state;
  }
}