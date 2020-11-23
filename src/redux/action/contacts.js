import { ADD_CONTACT, SET_CONTACTS, REMOVE_CONTACT, EDIT_FILTER } from '../constants/index.js';
import { v4 as uuidv4 } from 'uuid';

export const addContact = (contactObj) => ({
  type: ADD_CONTACT,
  payload: { ...contactObj, id: uuidv4() }
})

export const setContacts = (arr) => ({
  type: SET_CONTACTS,
  payload: arr
})

export const removeContact = (id) => ({
  type: REMOVE_CONTACT,
  payload: id
})

export const editInputFilter = (value) => ({
  type: EDIT_FILTER,
  payload: value,
})
