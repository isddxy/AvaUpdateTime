import React, { Component } from 'react'
import UserContainer from '../containers/UserContainer' // изменили импорт
//import PageContainer from '../containers/PageContainer'
import { Logo } from './Logo' // изменили импорт
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo />
        <UserContainer />
        {/*<PageContainer />*/}
      </Wrapper>
    )
  }
}

export default App

const Wrapper = styled.div`
  width: 100%;
  display: grid;
`
