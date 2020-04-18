import { Action, createReducer, on } from '@ngrx/store';
import { DashboardState } from '../models/dashboard';
import {
  addCart,
  removeCart,
  resetCart,
  getCartHttpSuccessAction,
  getCartHttpFailureAction,
  getCartHttpAction,
} from './actions';

const initialState: DashboardState = {
  cart: [],
  getCartHttpError: null,
  getCartHttpLoading: false,
};

const dashboardReducer = createReducer(
  initialState,
  on(addCart, (state, { payload }) => {
    const cart = state.cart.concat(payload); // Immutability approach. Don't use push
    return { ...state, cart };
  }),
  on(getCartHttpAction, state => {
    return { ...state, cart: [], getCartHttpError: null, getCartHttpLoading: true }; // see how cart is reset
  }),
  on(getCartHttpSuccessAction, (state, { payload }) => {
    const cart = state.cart.concat(payload);
    return { ...state, cart, getCartHttpLoading: false };
  }),
  on(getCartHttpFailureAction, (state, { payload }) => {
    return { ...state, getCartHttpError: payload, getCartHttpLoading: false };
  }),
  on(removeCart, (state, { payload }) => {
    const cart = state.cart.filter(food => food.id !== payload); // Immutability approach. Don't use pop
    return { ...state, cart };
  }),
  on(resetCart, state => {
    return { ...state, cart: [] };
  })
);

export function reducer(state: DashboardState, action: Action) {
  return dashboardReducer(state, action);
}
