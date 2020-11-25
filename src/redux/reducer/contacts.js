import { createReducer } from '@reduxjs/toolkit';

import {
  addContact,
  removeContact,
  setContacts,
  editInputFilter
} from '../action/contacts';

const initialState = {
  items: [],
  filter: ''
};

export default createReducer(initialState, {
  [addContact]: (state, { payload }) => ({
    ...state,
    items: [...state.items, payload],
  }),
  [setContacts]: (state, { payload }) => ({
    ...state,
    items: [...payload],
  }),
  [removeContact]: (state, { payload }) => ({
    ...state,
    items: state.items.filter(el => el.id !== payload),
  }),
  [editInputFilter]: (state, { payload }) => ({
    ...state,
    filter: payload,
  }),
})
