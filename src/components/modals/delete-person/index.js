import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PersonActions from 'store/actions/PersonActions'
import { toastr } from 'react-redux-toastr'

import ModalStructure from '../modal-structure'
import {
  Content,
  ActionButtons
} from './style'

class DeletePersonModal extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    actionDeletePerson: PropTypes.func,
    person: PropTypes.object
  }

  closeModal = (event) => {
    if (event) {
      event.preventDefault()
    }

    this.props.callback()
  }

  deletePerson = () => {
    this.props.actionDeletePerson(this.props.person)
    this.closeModal()
    toastr.success('Informação', 'A pessoa foi excluída com sucesso.')
  }

  content = () => {
    const { person } = this.props

    return (
      <Content>
        <p>
          Deseja excluir o pessoa <strong>{ person.name }</strong>?
        </p>

        <ActionButtons>
          <button
            className="primary"
            onClick={() => this.deletePerson()}
          >
            <span className="text">
              Deletar
            </span>
          </button>

          <button
            className="secondary"
            onClick={(event) => this.closeModal(event)}
          >
            <span className="text">
              Cancelar
            </span>
          </button>
        </ActionButtons>
      </Content>
    )
  }

  render () {
    return (
      <ModalStructure width='600' title="Deletar Pessoa" content={this.content} callback={() => this.closeModal()} />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(PersonActions, dispatch)

export default connect(null, mapDispatchToProps, null)(DeletePersonModal)