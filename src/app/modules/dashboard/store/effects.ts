import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/Operators';
import { DashboardStateService } from '../services/dashboard-state.service';
import { DashboardService } from '../services/dashboard.service';
import { getCartHttpAction, getCartHttpFailureAction, getCartHttpSuccessAction } from './actions';

@Injectable()
export class DashboardEffects {
  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService,
    private dashboardStateService: DashboardStateService
  ) {}

  cart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCartHttpAction),
      mergeMap(() =>
        this.dashboardService.getCart().pipe(
          map(response => {
            // this.dashboardStateService.dispatchResetCart(); (not required as we reset in reducers.ts file line no 27)
            return getCartHttpSuccessAction({ payload: response.foods });
          }),
          catchError(error => of(getCartHttpFailureAction({ payload: error })))
        )
      )
    )
  );
}

// define actions ->
// create effect ->
// action will tagged using ofType ->
// dispatch action will call effect ->
// define and trigger backend call (dont subscribe) ->
// dispatch another action (to handle effect success backend response)
// dispatch another action (to handle effect failure backend response)
