export const GET_PHOTO_REQUEST = 'GET_PHOTO_REQUEST'
export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS'
export const GET_PHOTO_FAIL = 'GET_PHOTO_FAIL'

export function getAvatar(id) {
  return function(dispatch) {
    dispatch({
      type: GET_PHOTO_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Api.call(
      'users.get',
      { user_ids: id, fields: 'photo_max_orig,photo_100', v: '5.103' },
      r => {
        if (r.response) {
          const photo_max = r.response[0].photo_max_orig
          const photo_mini = r.response[0].photo_100
          dispatch({
            type: GET_PHOTO_SUCCESS,
            payload: {
              avatar: photo_max,
              miniavatar: photo_mini,
            },
          })
        } else {
          dispatch({
            type: GET_PHOTO_FAIL,
            error: true,
            payload: new Error('Ошибка загрузки аватарки'),
          })
        }
      }
    )
  }
}
