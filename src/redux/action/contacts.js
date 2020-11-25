import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export const addContact = createAction('contacts/add', contactObj => ({
  payload: {
    ...contactObj,
    id: uuidv4()
  }
}));

export const removeContact = createAction('contacts/remove');
export const setContacts = createAction('contacts/set');
export const editInputFilter = createAction('filter/edit');
