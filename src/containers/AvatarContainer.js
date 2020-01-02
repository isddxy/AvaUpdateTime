import React from 'react'
import { connect } from 'react-redux'
import { Avatar } from '../components/Avatar'

class AvatarContainer extends React.Component {
  render() {
    if (this.props) {
      const { avatar } = this.props
      return (
        <Avatar
          avatar={avatar.photo.avatar}
          miniavatar={avatar.photo.miniavatar}
          isFetching={avatar.isFetching}
          error={avatar.error}
        />
      )
    }
  }
}

const mapStateToProps = store => {
  return {
    avatar: store.avatar,
  }
}

const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps, mapDispatchToProps)(AvatarContainer)
