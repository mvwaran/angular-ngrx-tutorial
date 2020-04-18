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

// Immutability approach

const dashboardReducer = createReducer(
  initialState,
  on(addCart, (state, { payload }) => {
    const cart = state.cart.concat(payload);
    return { ...state, cart };
  }),
  on(getCartHttpAction, state => {
    return { ...state, cart: [], getCartHttpLoading: true };
  }),
  on(getCartHttpSuccessAction, (state, { payload }) => {
    const cart = state.cart.concat(payload);
    return { ...state, cart, getCartHttpLoading: false };
  }),
  on(getCartHttpFailureAction, (state, { payload }) => {
    return { ...state, getCartHttpError: payload, getCartHttpLoading: false };
  }),
  on(removeCart, (state, { payload }) => {
    const cart = state.cart.filter(food => food.id !== payload);
    return { ...state, cart };
  }),
  on(resetCart, state => {
    return { ...state, cart: [] };
  })
);

export function reducer(state: DashboardState, action: Action) {
  return dashboardReducer(state, action);
}
