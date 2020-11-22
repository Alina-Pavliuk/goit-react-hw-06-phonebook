import { EDIT_INPUT_FORM } from '../constants/index.js';

export const editInputForm = (value) => ({
  type: EDIT_INPUT_FORM,
  payload: value,
})