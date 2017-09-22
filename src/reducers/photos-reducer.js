import {
  PHOTOS_FETCH,
  START_FETCHING,
  FAIL_FETCHING,
  DONE_FETCHING,
  STORE_FILTERED_RESULTS
 } from '../actions/actionTypes';

const initialState = {
  fetching: {
    error: false,
    isFetching: false
  },
  items: [],
  filtered: []
}

const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING:
    case DONE_FETCHING:
    case FAIL_FETCHING:
      return {...state, fetching: { isFetching: action.isFetching, error: action.error }}
    case PHOTOS_FETCH:
      return {
        ...state,
        items: action.data,
        filtered: action.data
      }
    case STORE_FILTERED_RESULTS:
      return {...state, filtered: action.results}
    default:
      return state;
  }
}

export default photosReducer;
