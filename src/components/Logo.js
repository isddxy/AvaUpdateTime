import React from 'react'
import styled from 'styled-components'

export class Logo extends React.Component {
  render() {
    return <Logotype src={'logo.svg'} />
  }
}

const Logotype = styled.img`
  margin: 30px auto;
`
