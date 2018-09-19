import { Tonie } from './interfaces/tonies';
import { ToniesActions, ToniesActionTypes } from './tonies.actions';

export interface State {
  allTonies: Tonie[];
  wishlist: Tonie[];
  myTonies: Tonie[];
}
const INITIAL_STATE: State = {
  allTonies: [],
  wishlist: [],
  myTonies: []
};

export function toniesReducer(state = INITIAL_STATE, action: ToniesActions) {
  switch (action.type) {
    case ToniesActionTypes.LOADED_ALL_TONIES: {
      return {
        ...state,
        allTonies: [...action.payload]
      };
    }
    case ToniesActionTypes.ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      };
    }
    case ToniesActionTypes.ADD_TO_MY_TONIES: {
      return {
        ...state,
        myTonies: [...state.myTonies, action.payload]
      };
    }
  }
}
