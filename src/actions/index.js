import {
  TEST,
  PHOTOS_FETCH,
  START_FETCHING,
  FAIL_FETCHING,
  DONE_FETCHING
} from './actionTypes';

export const performTest = () => {
  return {
    type: TEST
  }
}

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
