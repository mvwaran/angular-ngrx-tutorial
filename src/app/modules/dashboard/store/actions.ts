import { createAction, props } from '@ngrx/store';
import { Food } from '../models/dashboard';

export const addCart = createAction(
  '[Dashboard] add food to cart',
  props<{ payload: Food | Food[] }>()
);

export const removeCart = createAction(
  '[Dashboard] remove food from cart',
  props<{ payload: number }>()
);

export const resetCart = createAction('[Dashboard] reset cart');

export const getCartHttpAction = createAction('[Dashboard] get cart http');

export const getCartHttpSuccessAction = createAction(
  '[Dashboard] get cart http success',
  props<{ payload: Food | Food[] }>()
);

export const getCartHttpFailureAction = createAction(
  '[Dashboard] get cart http failure',
  props<{ payload: Error }>()
);
