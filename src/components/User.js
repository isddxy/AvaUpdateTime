import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar } from './Avatar'

export class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return (
        <div>
          <AvatarList>
            <Avatar />
            <Avatar />
            <Avatar />
            <div>
              <UserName>{name}</UserName>
              <AddAvatar>
                <div>
                  <Icon src={'upload.svg'} />
                  <p>
                    Загрузить <br /> новую аватарку
                  </p>
                </div>
              </AddAvatar>
            </div>
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
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  handleLogin: PropTypes.func.isRequired,
}

const AvatarList = styled.div`
  display: grid;
  //outline: 1px solid blue;
  width: 900px;
  margin: 30px auto;
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
  max-width: 600px;
  line-height: 24px;
  padding: 30px 0;
  margin: 0 auto;
`

const AddAvatar = styled.div`
  margin: 30px 0 0 0;
  color: #6184FF;
  text-align: center;
  border: 5px solid #6184FF;
  border-radius: 6px;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  height: 300px;
  width: 212px;
  cursor: pointer;
  margin-left: 40px;
  &:hover {
    background: #6184FF
    color: #fff
  }
`

const Icon = styled.img`
  margin-bottom: 18px;
`
