// counter.actions.ts
import { Action } from '@ngrx/store';

export enum UIActionTypes {
  START_LOADING = '[UI] Start Loading',
  STOP_LOADING = '[UI] Stop Loading',
}

export class StartLoading implements Action {
  readonly type = UIActionTypes.START_LOADING;
}

export class StopLoading implements Action {
  readonly type = UIActionTypes.STOP_LOADING;
}

export type UIActionsUnion = StartLoading | StopLoading ;
