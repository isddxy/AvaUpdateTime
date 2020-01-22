import {
  GET_URL_SERVER_REQUEST,
  GET_URL_SERVER_SUCCESS,
  GET_URL_SERVER_FAIL,
} from '../actions/GetUrlServerAction'

const initialState = {
  Id: {
    upload_url: 'null',
  },
  isFetching: false,
  error: '',
}

export function getServerUrlReducer(state = initialState, action) {
  switch (action.type) {
    case GET_URL_SERVER_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case GET_URL_SERVER_SUCCESS:
      return {
        ...state,
        upload_url: action.payload,
        isFetching: false,
        error: '',
      }

    case GET_URL_SERVER_FAIL:
      return { ...state, error: action.payload.message, isFetching: false }

    default:
      return state
  }
}
