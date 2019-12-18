import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { avatarReducer } from './avatar'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  avatar: avatarReducer,
})
