import { combineReducers } from 'redux'

import { exploreReducer } from './explore/reducer'
import { styleReducer } from './style/reducer'
export default combineReducers({
  exploreReducer,
  styleReducer
})
