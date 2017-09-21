import { TEST } from '../actions/actionTypes';

const initialState = {}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return {...state, ...state}
    default:
      return state;
  }
}

export default appReducer;
