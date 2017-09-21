import { PHOTOS_FETCH } from '../actions/actionTypes';

const initialState = {
  items: []
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case PHOTOS_FETCH:
      return {...state, items: [...state.items, ...action.data]}
    default:
      return state;
  }
}

export default photosReducer;
