import {
  PHOTOS_FETCH,
  START_FETCHING,
  FAIL_FETCHING,
  DONE_FETCHING,
  FOCUS_SEARCH,
  STORE_FILTERED_RESULTS
} from './actionTypes';

export const photosFetch = (data) => {
  return {
    type: PHOTOS_FETCH,
    data: data
  }
}

export const startFetching = () => {
  return {
    type: START_FETCHING,
    isFetching: true,
    error: false
  }
}

export const doneFetching = () => {
  return {
    type: DONE_FETCHING,
    isFetching: false,
    error: false
  }
}

export const failFetching = () => {
  return {
    type: FAIL_FETCHING,
    isFetching: false,
    error: true
  }
}

export const focusSearch = () => {
  return {
    type: FOCUS_SEARCH,
    inputIsFocused: true
  }
}

export const storeFilteredResults = (results) => {
  return {
    type: STORE_FILTERED_RESULTS,
    results: results
  }
}
