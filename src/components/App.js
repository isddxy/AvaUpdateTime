import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer' // изменили импорт
//import AvatarContainer from '../containers/AvatarContainer'
//import { BtnAddAvatar } from '../components/AddAvatar'
import { Logo } from './Logo' // изменили импорт
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <UserContainer />
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  font-family: 'Montserrat', sans-serif;
`
