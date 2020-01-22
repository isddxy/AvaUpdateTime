import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
//import axios from 'axios'

export class BtnAddAvatar extends React.Component {
  state = {
    selectedFile: null,
  }

  fileSelecterHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  fileUploadHandler = () => {
    this.props.clickUploadPhoto()

    // const fd = new FormData()
    // fd.append('photo', this.state.selectedFile)
    // axios
    //   .post(
    //     'https://pu.vk.com/c857420/upload.php?_query=eyJhY3QiOiJvd25lcl9waG90byIsInNhdmUiOjEsImFwaV93cmFwIjp7InNlcnZlciI6OTk5LCJwaG90byI6IntyZXN1bHR9IiwibWlkIjoyMTQwNzAyMzIsImhhc2giOiI3NDQ4ZjkzZjQwNWRmZDVjNDQ0ZjVkNGFhYmI4NDk0MiIsIm1lc3NhZ2VfY29kZSI6MiwicHJvZmlsZV9haWQiOi02fSwib2lkIjoyMTQwNzAyMzIsIm1pZCI6MjE0MDcwMjMyLCJzZXJ2ZXIiOjg1NzQyMCwiX29yaWdpbiI6Imh0dHBzOlwvXC9hcGkudmsuY29tIiwiX3NpZyI6IjZlODg1NTcxNjA4MzRjM2YxMjg2YTk1MGIxOWE5OTgxIn0',
    //     fd,
    //     {
    //       onUploadProgress: progressEvent => {
    //         console.log(
    //           'Progress: ' +
    //             Math.round((progressEvent.loaded / progressEvent.total) * 100) +
    //             '%'
    //         )
    //       },
    //     }
    //   )
    //   .then(res => {
    //     console.log(res)
    //   })
  }

  render() {
    return (
      <AddAvatar>
        <input
          style={{ display: 'none' }}
          type="file"
          onChange={this.fileSelecterHandler}
          ref={fileInput => (this.fileInput = fileInput)}
        />
        <button onClick={() => this.fileInput.click()}>Выбрать аву</button>
        <button onClick={this.fileUploadHandler}>Добавить аву</button>
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

BtnAddAvatar.propTypes = {
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
}

const mapStateToProps = store => {
  return {
    upload: store.upload,
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(BtnAddAvatar)

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
