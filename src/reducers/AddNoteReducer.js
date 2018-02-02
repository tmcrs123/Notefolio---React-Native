import { TEXT_CHANGED, TITLE_CHANGED, UPDATE_NOTE, RESET_FORM } from '../actions/types';

const INITIAL_STATE = { title: '', text: '', uid: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TITLE_CHANGED:
      return { ...state, title: action.payload };
    case TEXT_CHANGED:
      return { ...state, text: action.payload };
    case UPDATE_NOTE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case RESET_FORM:
      console.log('reseting form');
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};
