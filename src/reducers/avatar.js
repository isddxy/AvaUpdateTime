import {
  GET_PHOTO_REQUEST,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_FAIL,
} from '../actions/GetAvatarAction'

const initialState = {
  photo: {
    avatar: '/no-ava.gif',
    miniavatar: '/no-ava.gif',
  },
  isFetching: false,
  error: '',
}

export function avatarReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PHOTO_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case GET_PHOTO_SUCCESS:
      return { ...state, photo: action.payload, isFetching: false, error: '' }

    case GET_PHOTO_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}
