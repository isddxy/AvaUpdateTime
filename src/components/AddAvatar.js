import React from 'react'
import styled from 'styled-components'

export class BtnAddAvatar extends React.Component {
  render() {
    return (
      <AddAvatar>
        <div>
          <Icon src={'upload.svg'} />
          <p>
            Загрузить <br /> новую аватарку
          </p>
        </div>
      </AddAvatar>
    )
  }
}

const AddAvatar = styled.div`
  color: #6184FF;
  text-align: center;
  border: 5px solid #6184FF;
  font-family: 'Montserrat', sans-serif;
  border-radius: 20px;
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  height: 300px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background: #6184FF
    color: #fff
  }
`

const Icon = styled.img`
  margin-bottom: 18px;
`
