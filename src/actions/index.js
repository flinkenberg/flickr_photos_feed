import {
  TEST,
  PHOTOS_FETCH
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
