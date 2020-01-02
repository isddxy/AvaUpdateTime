import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import AvatarContainer from '../containers/AvatarContainer'
import UploadContainer from '../containers/UploadContainer'

export class User extends React.Component {
  renderTemplate = () => {
    const { firstname, lastname, error, isFetching, avatar, id } = this.props

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
      return <p>Загружаю...</p>
    }

    if (firstname) {
      return (
        <div>
          <AvatarList>
            <AvatarContainer avatar={avatar} />
            <AvatarContainer avatar={avatar} />
            <AvatarContainer avatar={avatar} />
            <UserInfo>
              <UserName>
                {firstname} {lastname}
              </UserName>
              <UploadContainer id={id} />
            </UserInfo>
          </AvatarList>
          <LoginVK onClick={this.props.handleLogin}>
            Сохранить настройки
          </LoginVK>
        </div>
      )
    } else {
      return (
        <div>
          <H1>Автоматическое обновление аватара</H1>
          <P>
            Загружаете два фото - новую и старую аватарку в нашу систему, далее
            выбираете время автоматического смены. Работает в фоновом режиме без
            ваших действий.
          </P>
          <LoginVK onClick={this.props.handleLogin}>
            Войти через
            <IconVk src={'/vk.svg'} />
          </LoginVK>
        </div>
      )
    }
  }
  render() {
    return <div>{this.renderTemplate()}</div>
  }
}

User.propTypes = {
  id: PropTypes.string.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}

const UserInfo = styled.div`
  margin-left: 30px;
`

const AvatarList = styled.div`
  display: grid;
  width: 900px;
  margin: 0 auto;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const LoginVK = styled.button`
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  background: #6184ff;
  padding: 30px 145px;
  border: none;
  border-radius: 999px;
  display: block;
  font-family: 'Montserrat', sans-serif;
  margin: 30px auto;
`

const IconVk = styled.img`
  margin-bottom: -2px;
  padding: 0 6px;
`

const H1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 48px;
  text-align: center;
  color: #535353;
  max-width: 600px;
  line-height: 58px;
  margin: 0 auto;
`

const P = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #535353;
  display: grid;
  text-align: center;
  max-width: 600px;
  line-height: 24px;
  padding: 30px 0;
  margin: 0 auto;
`

const UserName = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: #535353;
  display: grid;
  text-align: center;
  width: 100%;
  line-height: 24px;
  padding: 50px 0;
  margin: 0 auto;
`
