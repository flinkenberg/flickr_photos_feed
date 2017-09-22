import { FOCUS_SEARCH } from '../actions/actionTypes';

const initialState = {
  app: {
    inputIsFocused: false
  }
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOCUS_SEARCH:
      return {...state, app: { inputIsFocused: action.inputIsFocused }}
    default:
      return state;
  }
}

export default appReducer;
