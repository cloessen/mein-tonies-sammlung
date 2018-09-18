import { Tonie } from './interfaces/tonies';

interface State {
  tonies: Tonie[];
}
const INITIAL_STATE: State = {
  tonies: []
};

export function toniesReducer(state, action) {
  return state;
}
