import { combineReducers } from 'redux'
import { pageReducer } from './page'
import { userReducer } from './user'
import { avatarReducer } from './avatar'
import { uploadReducer } from './upload'

export const rootReducer = combineReducers({
  page: pageReducer,
  user: userReducer,
  avatar: avatarReducer,
  upload: uploadReducer,
})
