import { EDIT_INPUT_FORM } from '../constants/index.js';

const initialState = { name: '', number: '' };

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_INPUT_FORM:
      return action.payload;
    default:
      return state;
  }
} 