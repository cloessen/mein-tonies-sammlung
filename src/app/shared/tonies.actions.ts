import { Action } from '@ngrx/store';
import { Tonie } from './interfaces/tonies';

export enum ToniesActionTypes {
  LOADED_ALL_TONIES = '[TONIE] Load all Tonies',
  ADD_TO_MY_TONIES = '[TONIE] Add to myTonies',
  ADD_TO_WISHLIST = '[TONIE] Add to Wishlist',
}

export class LoadedAllTonies implements Action {
  readonly type = ToniesActionTypes.LOADED_ALL_TONIES;
  constructor(public payload: Tonie[]) {}
}

export class AddToMyTonies implements Action {
  readonly type = ToniesActionTypes.ADD_TO_MY_TONIES;
  constructor(public payload: Tonie) {}
}
export class AddToWishlist implements Action {
  readonly type = ToniesActionTypes.ADD_TO_WISHLIST;
  constructor(public payload: Tonie) {}
}

export type ToniesActions =  LoadedAllTonies | AddToMyTonies | AddToWishlist ;
