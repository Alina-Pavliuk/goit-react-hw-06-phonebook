import { configureStore } from '@reduxjs/toolkit';
import contacts from './reducer/contacts';

const store = configureStore({
  reducer: {
    contacts,
  }
})

export default store;
