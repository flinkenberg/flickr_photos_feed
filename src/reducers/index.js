import { combineReducers } from 'redux';

import appReducer from './app-reducer';
import photosReducer from './photos-reducer';

const reducers = combineReducers({
  app: appReducer,
  photos: photosReducer
});

export default reducers;
