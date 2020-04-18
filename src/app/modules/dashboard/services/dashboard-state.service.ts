import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Food } from '../models/dashboard';
import { addCart, removeCart, getCartHttpAction, resetCart } from '../store/actions';
import { cartStateSelector, getCartHttpLoadingSelector } from '../store/selectors';

@Injectable()
export class DashboardStateService {
  constructor(private store: Store) {}

  dispatchAddCart(food: Food) {
    this.store.dispatch(addCart({ payload: food }));
  }

  dispatchRemoveCart(foodId: number) {
    this.store.dispatch(removeCart({ payload: foodId }));
  }

  dispatchResetCart() {
    this.store.dispatch(resetCart());
  }

  disptachGetCart() {
    this.store.dispatch(getCartHttpAction());
  }

  selectorCartItems() {
    // return this.store.select(cartStateSelector);
    return this.store.pipe(select(cartStateSelector));
  }

  selectorGetCartHttpLoading() {
    // return this.store.select(cartStateSelector);
    return this.store.pipe(select(getCartHttpLoadingSelector));
  }
}
