# NgrxTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.26.

## Steps

1. Installation
2. Registering in Root and Feature `@NgModule`
3. Writing to Store
4. Reading from Store
5. Using Effects
6. Keypoint

### Installation

- `npm install @ngrx/store --save`
- `npm install @ngrx/store-devtools --save-dev`
- `npm install @ngrx/effects --save`
- Install Redux Devtools extension

### Registering in Root and Feature `@NgModule`

1. In `app.module.ts` file register NgRx store and effect like below

   - `StoreModule.forRoot({})`
   - `StoreDevtoolsModule.instrument()`
   - `EffectsModule.forRoot([]),`

2. In `FEATURE.module.ts` file register NgRx store and effect like below

   - `StoreModule.forFeature(REDUCER_NAME, REDUCER_FUNCTION)`
   - `EffectsModule.forRoot([])`

### Writing to Store

1. Create interface for feature state structure e.g. `DashboardState` in `models` folder
2. Create `store/reducers.ts` file
3. Create `initialState` with `DashboardState` in `store/reducers.ts` file
4. Write reducer logic for `initialState` using `createReducer`
5. Create `store/actions.ts` file
6. Write `action` using `createAction` in `store/actions.ts` and pass props as `{payload: DATA}` syntax
7. Wire that action in `store/reducers.ts` file using `on`
8. See `Keypoint` step for reducer tips
9. Use `services/*-state.service.ts` file and dispatch action `this.store.dispatch(ACTION_NAME(PAYLOAD))` using that file from component

### Reading from Store

1. Create `store/selectors.ts` file
2. Use `createFeatureSelector` to get feature module object as defined in `Registering in Root and Feature / Step 2 / Point 1`
3. Use `createSelector` to extract necessary value from feature object
4. Use `services/*-state.service.ts` file and get selector value using `this.store.pipe(select(SELECTOR_NAME))`
5. Create `Subscription` and subscribe to selector value in component `ngOnInit`
6. `unsubscribe` that subscription in component `ngOnDestroy`
7. Use `async` pipe wherever applicable instead of step 5 and step 6

### Using Effects with examples

1. Any asynchronous reaction updates store should be written inside effects.
2. Create `store/effects.ts` file which is an angular service and configure it in `EffectsModule.forFeature([EFFECT_SERVICE])`
3. For each effect create 3 action `getCartHttpAction, getCartHttpSuccessAction, getCartHttpFailureAction`
4. Configure above action in reducer like below format
   - `getCartHttpAction` will reset `cart` and `getCartHttpError` to null and set `getCartHttpLoading` as `true`
   - `getCartHttpSuccessAction` will set `getCartHttpLoading` as `false` and `cart` as payload
   - `getCartHttpFailureAction` will set `getCartHttpLoading` as `false` and `getCartHttpError` as payload
5. Use `createEffect` to write effect following below steps
   - With `ofType` tag `getCartHttpAction` for this `cart$` effect
   - Use `mergeMap` and trigger backend call
   - On success of backend call use `rxjs map` and dispatch `getCartHttpSuccessAction`
   - On failure of backend call use `rxjs catchError` and dispatch `getCartHttpFailureAction`
6. Configure `getCartHttpAction` in `services/*-state.service.ts` and call from component `ngOnInit` or `button click` as per your requirement
7. Show loading indicator using `async` using `selector`

### Keypoint

1. Don't use `push` to update array as it will mutate
2. Use `concat` and `filter` to add or remove element from array
3. Strongly type your interface and variables
4. Dumb components should not have ngrx logic
5. Use spread operator `...` for updating object. Don't mutate
6. Don't forget to reset state object only wherever applicable
