import { EDIT_INPUT_FILTER } from '../constants/index.js';

export const editInputFilter = (value) => ({
  type: EDIT_INPUT_FILTER,
  payload: value,
})