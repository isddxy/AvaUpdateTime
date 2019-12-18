import React from 'react'
import styled from 'styled-components'

export class Avatar extends React.Component {
  render() {
    return (
      <BlockAvatar>
        <Close src={'/cancel.svg'} />
        <MiniAvatar
          src={'https://image.freepik.com/free-vector/guy-mascot_35422-117.jpg'}
        />
        <FullAvatar src={'/full.png'} />
        <Time>15:30</Time>
      </BlockAvatar>
    )
  }
}

const BlockAvatar = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 20px;
  border-radius: 20px;
  cursor: pointer;
  //outline: 1px solid red;
  &:hover {
    background: #6184ff;
  }
`

const MiniAvatar = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 99px;
  margin-bottom: 30px;
`

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  justify-self: end;
  align-self: end;
  opacity: 0.3;
`

const FullAvatar = styled.img`
  width: 150px;
  height: 300px;
  border-radius: 6px;
  margin-bottom: 20px;
`

const Time = styled.div`
  margin: 0 auto;
  border: 3px solid #f3f3f3;
  padding: 12px 24px;
  border-radius: 999px;
  background: #fff;
`
