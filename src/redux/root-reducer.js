import { combineReducers } from 'redux'

import testReducer from './test/reducer'
import { exploreReducer } from './explore/reducer'
export default combineReducers({
  testReducer,
  exploreReducer
})
