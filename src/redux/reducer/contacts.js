import {
  ADD_CONTACT,
  SET_CONTACTS,
  REMOVE_CONTACT,
  EDIT_FILTER
} from '../constants/index.js'

const initialState = {
  items: [],
  filter: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return ({
        ...state,
        items: [...state.items, action.payload],
      })
    case SET_CONTACTS:
      return ({
        ...state,
        items: [...action.payload],
      })
    case REMOVE_CONTACT:
      return ({
        ...state,
        items: state.items.filter(el => el.id !== action.payload),
      })
    case EDIT_FILTER:
      return ({
        ...state,
        filter: action.payload
      })
    default:
      return state;
  }
}
