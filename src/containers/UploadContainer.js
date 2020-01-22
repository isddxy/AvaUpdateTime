import React from 'react'
import { connect } from 'react-redux'
import { getUrlServer } from '../actions/GetUrlServerAction'
import { BtnAddAvatar } from '../components/AddAvatar'

class UploadContainer extends React.Component {
  clickUploadPhoto = () => {
    const { clickUploadPhoto } = this.props
    const successCallback = () => {
      // const { id } = this.props
      // console.log(id)
      // console.log('here')
      // uploadPhoto(id)
    }
    clickUploadPhoto(successCallback)
  }

  render() {
    const { id } = this.props
    return <BtnAddAvatar id={id} clickUploadPhoto={this.clickUploadPhoto} />
  }
}

const mapStateToProps = store => {
  return {
    upload: store.id,
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clickUploadPhoto: successCallback => dispatch(getUrlServer('214070232')),
    getUrlServer: id => dispatch(getUrlServer('214070232')),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadContainer)
