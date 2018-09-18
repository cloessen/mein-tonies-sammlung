import { ActionReducerMap } from '@ngrx/store';
import * as fromUI from './shared/ui.actions'

export interface State {
  ui: fromUI.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};
