import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/UserActions'

const initialState = {
  id: '',
  firstname: '',
  lastname: '',
  error: '',
  isFetching: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetching: true, error: '' }

    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        id: action.payload.id,
        firstname: action.payload.firstname,
        lastname: action.payload.lastname,
      }

    case LOGIN_FAIL:
      return { ...state, isFetching: false, error: action.payload.message }

    default:
      return state
  }
}
