export const UPLOAD_PHOTO_REQUEST = 'UPLOAD_PHOTO_REQUEST'
export const UPLOAD_PHOTO_SUCCESS = 'UPLOAD_PHOTO_SUCCESS'
export const UPLOAD_PHOTO_FAIL = 'UPLOAD_PHOTO_FAIL'

export function uploadPhoto(id) {
  return function(dispatch) {
    dispatch({
      type: UPLOAD_PHOTO_REQUEST,
    })

    //eslint-disable-next-line no-undef
    VK.Api.call(
      'photos.getOwnerPhotoUploadServer',
      { owner_id: id, v: '5.103' },
      r => {
        if (r.response) {
          const upload_url = r.response.upload_url
          console.log(upload_url)
          dispatch({
            type: UPLOAD_PHOTO_SUCCESS,
            payload: {
              upload_url: upload_url,
            },
          })
        } else {
          dispatch({
            type: UPLOAD_PHOTO_FAIL,
            error: true,
            payload: new Error('Ошибка запроса сервера'),
          })
        }
      }
    )
  }
}
