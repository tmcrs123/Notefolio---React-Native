import { SAVE_NOTE, DELETE_NOTE, EDIT_NOTE, GET_NOTES } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case GET_NOTES:
      return action.payload;
    case SAVE_NOTE:
      return state;
    case EDIT_NOTE:
      return state;
    case DELETE_NOTE:
      return state;
    default:
      return state;
  }
};
