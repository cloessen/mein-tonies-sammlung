import { UIActionTypes, UIActionsUnion} from './app.actions';
interface State {
  isLoading: boolean;
}
const INITIAL_STATE: State = {
  isLoading: false
};

export function UiReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UIActionTypes.START_LOADING: {
      return {
        ...state,
        isLoading: true
      };
    }
    case UIActionTypes.STOP_LOADING: {
      return {
        ...state,
        isLoading: false
      };
    }
    default: {
      return state;
    }
  }
}
