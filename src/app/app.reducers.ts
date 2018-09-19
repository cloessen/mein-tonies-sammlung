import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './shared/ui.reducer';
import * as fromTonies from './shared/tonies.reducer'
import { createFeatureSelector } from '@ngrx/store';
import { createSelector } from '@ngrx/store';

export interface AppState {
  ui: fromUI.State;
  tonies: fromTonies.State;
}

export const reducers: ActionReducerMap<AppState> = {
  ui: fromUI.uiReducer,
  tonies: fromTonies.toniesReducer
};

export const getUiState = createFeatureSelector('ui');
export const getIsLoading = createSelector(getUiState, (state: fromUI.State) => state.isLoading);

export const getToniesState = createFeatureSelector('tonies');
export const getAllTonies = createSelector(getToniesState, (state: fromTonies.State) => state.allTonies);
export const getMyTonies = createSelector(getToniesState, (state: fromTonies.State) => state.myTonies);
export const getWishlist = createSelector(getToniesState, (state: fromTonies.State) => state.wishlist);
