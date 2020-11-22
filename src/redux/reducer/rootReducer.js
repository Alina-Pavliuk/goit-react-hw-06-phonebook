import { combineReducers } from 'redux';
import inputFilter from './inputFilter.js';
import contactsList from './contactsList.js';
import inputForm from './inputForm';
const rootReducer = combineReducers({
  inputFilter,
  contactsList,
  inputForm,
})

export default rootReducer;

