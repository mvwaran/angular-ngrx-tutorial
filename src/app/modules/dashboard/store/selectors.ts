import { createFeatureSelector, createSelector } from '@ngrx/store';
import { DashboardState } from '../models/dashboard';

export const dashboardSelector = createFeatureSelector('dashboard');

export const cartStateSelector = createSelector(
  dashboardSelector,
  (state: DashboardState) => state.cart
);

export const getCartHttpLoadingSelector = createSelector(
  dashboardSelector,
  (state: DashboardState) => state.getCartHttpLoading
);
