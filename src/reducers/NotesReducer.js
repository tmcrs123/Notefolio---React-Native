import { GET_NOTES } from '../actions/types';

const INITIAL_STATE = { notes: [], loading: true };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_NOTES:
      return { ...state, notes: action.payload, loading: false };
    default:
      return state;
  }
};
