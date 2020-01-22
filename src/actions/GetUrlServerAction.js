export const GET_URL_SERVER_REQUEST = 'GET_URL_SERVER_REQUEST'
export const GET_URL_SERVER_SUCCESS = 'GET_URL_SERVER_SUCCESS'
export const GET_URL_SERVER_FAIL = 'GET_URL_SERVER_FAIL'

export function getUrlServer(id) {
  return function(dispatch) {
    dispatch({
      type: GET_URL_SERVER_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Api.call(
      'photos.getOwnerPhotoUploadServer',
      { owner_id: id, v: '5.103' },
      r => {
        if (r.response) {
          const upload_url = r.response.upload_url
          //console.log(upload_url)
          dispatch({
            type: GET_URL_SERVER_SUCCESS,
            payload: {
              upload_url: upload_url,
            },
          })
        } else {
          dispatch({
            type: GET_URL_SERVER_FAIL,
            error: true,
            payload: new Error('Ошибка запроса сервера'),
          })
        }
      }
    )
  }
}
