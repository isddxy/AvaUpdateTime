import {
  UPLOAD_PHOTO_REQUEST,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
} from '../actions/UploadPhotoAction'

const initialState = {
  Id: {
    upload_url: 'null',
  },
  isFetching: false,
  error: '',
}

export function uploadReducer(state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PHOTO_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        upload_url: action.payload,
        isFetching: false,
        error: '',
      }

    case UPLOAD_PHOTO_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}
