import React from 'react'
import { connect } from 'react-redux'
import { User } from '../components/User'
import { handleLogin } from '../actions/UserActions'
import { getAvatar } from '../actions/GetAvatarAction'
import { getUrlServer } from '../actions/GetUrlServerAction'

class UserContainer extends React.Component {
  handleLogin = () => {
    const { handleLogin, getAvatar, getUrlServer } = this.props
    const successCallback = () => {
      const { user } = this.props
      getAvatar(user.id)
      getUrlServer(user.id)
    }
    handleLogin(successCallback)
  }

  render() {
    const { user } = this.props
    return (
      <User
        id={user.id}
        firstname={user.firstname}
        lastname={user.lastname}
        error={user.error}
        isFetching={user.isFetching}
        handleLogin={this.handleLogin}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLogin: successCallback => dispatch(handleLogin(successCallback)),
    getAvatar: id => dispatch(getAvatar(id)),
    getUrlServer: id => dispatch(getUrlServer(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
