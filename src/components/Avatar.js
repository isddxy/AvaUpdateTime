import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export class Avatar extends React.Component {
  renderTemplate = () => {
    const { avatar, miniavatar, isFetching, error } = this.props

    if (error) {
      return (
        <p>
          Во время запроса произошла ошибка, обновите страницу
          <br />
          {error}
        </p>
      )
    }

    if (isFetching) {
      return <p>Загружаю вашу аватарку...</p>
    }

    if (avatar) {
      return (
        <BlockAvatar>
          <Close src={'/close.svg'} />
          <MiniAvatar src={miniavatar} />
          <FullAvatar src={avatar} />
          <Time>15:30</Time>
        </BlockAvatar>
      )
    }
  }
  render() {
    return <div>{this.renderTemplate()}</div>
  }
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  miniavatar: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool,
}

const BlockAvatar = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  //border: 5px solid #fff;
  &:hover {
    background: #f0f0f0;
  }
`

const MiniAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 99px;
  margin-bottom: 30px;
`

const Close = styled.img`
  width: 14px;
  height: 14px;
  cursor: pointer;
  justify-self: end;
  align-self: end;
`

const FullAvatar = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
  margin-bottom: 20px;
`

const Time = styled.div`
  margin: 0 auto;
  border: 3px solid #f3f3f3;
  padding: 12px 24px;
  border-radius: 999px;
  font-family: 'Montserrat', sans-serif;
  background: #fff;
`
