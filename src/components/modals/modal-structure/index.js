import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  ContainerModal,
  Modal
} from './style'

class ModalStructure extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    content: PropTypes.func.isRequired,
    width: PropTypes.string,
    title: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)

    this.state = {
      isOpen: false
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isOpen: true })
    }, 10)
  }

  setNewValue = (value) => {
    this.setState({ isOpen: value })

    setTimeout(() => {
      this.props.callback({ modalIsOpen: false })
    }, 300)
  }

  render () {
    return (
      <ContainerModal
        opened={this.state.isOpen}
        onClick={() => this.setNewValue(false)}
      >
        <Modal
          opened={this.state.isOpen}
          width={this.props.width}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className='btn-close-modal' 
            onClick={() => this.setNewValue(false)}
          >
            <img src={process.env.PUBLIC_URL + '/img/close-circle-icon.svg'} alt="" />
          </button>

          <h1 className='modal-title'>
            {this.props.title}
          </h1>

          {this.props.content()}
        </Modal>
      </ContainerModal>
    )
  }
}

export default ModalStructure
