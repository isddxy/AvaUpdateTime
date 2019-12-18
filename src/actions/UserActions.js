export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'

export function handleLogin(callback) {
  return function(dispatch) {
    dispatch({
      type: LOGIN_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Auth.login(r => {
      if (r.session) {
        const id = r.session.user.id
        const firstname = r.session.user.first_name
        const lastname = r.session.user.last_name

        dispatch({
          type: LOGIN_SUCCESS,
          payload: {
            id: id,
            firstname: firstname,
            lastname: lastname,
          },
        })
        callback()
      } else {
        dispatch({
          type: LOGIN_FAIL,
          error: true,
          payload: new Error('Ошибка авторизации'),
        })
      }
    }, 4) // запрос прав на доступ к photo
  }
}
