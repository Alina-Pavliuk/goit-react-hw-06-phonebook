import { EDIT_INPUT_FILTER } from '../constants'

const InitialState = ''

export default (state = InitialState, action) => {
  switch (action.type) {
    case EDIT_INPUT_FILTER:
      return action.payload;
    default:
      return state;
  }
} 