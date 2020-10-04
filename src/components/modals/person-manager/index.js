import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PersonActions from 'store/actions/PersonActions'
import InputMask from "react-input-mask"
import { toastr } from 'react-redux-toastr'

import ModalStructure from '../modal-structure'
import {
  Content,
  Form,
  ActionButtons
} from './style'

class DemostrationModal extends Component {
  static propTypes = {
    callback: PropTypes.func.isRequired,
    actionAddPerson: PropTypes.func,
    actionEditPerson: PropTypes.func,
    person: PropTypes.object
  }

  constructor (props) {
    super(props)

    this.state = {
      name: '',
      doc: '',
      maritalStatus: 0,
      isCpnj: false,
      maritalStatusList: [
        {
          name: 'Solteiro(a)',
          id: 1
        },
        {
          name: 'Casado(a)',
          id: 2
        },
        {
          name: 'Divorciado(a)',
          id: 3
        },
        {
          name: 'Viúvo(a)',
          id: 4
        }
      ],
      validators: {
        doc: true,
        name: true,
        maritalStatus: true
      }
    }
  }

  componentDidMount () {
    if (Object.keys(this.props.person).length > 0) {
      this.setState({
        name: this.props.person.name,
        doc: this.props.person.doc,
        maritalStatus: this.props.person.maritalStatus
      })
    }
  }

  closeModal = (event) => {
    if (event) {
      event.preventDefault()
    }

    this.props.callback()
  }

  personBehavior = (event) => {
    event.preventDefault()

    if (Object.keys(this.props.person).length > 0) {
      this.props.actionEditPerson({
        name: this.state.name,
        doc: this.state.doc,
        maritalStatus: this.state.maritalStatus,
        id: this.props.person.id
      })

      toastr.success('Informação', 'Dados da Pessoa editada com sucesso.')
    } else {
      this.props.actionAddPerson({
        name: this.state.name,
        doc: this.state.doc,
        maritalStatus: this.state.maritalStatus
      })

      toastr.success('Informação', 'A pessoa foi cadastrada com sucesso.')
    }

    this.closeModal()
  }

  content = () => {
    const { name, doc, maritalStatus, maritalStatusList } = this.state

    return (
      <Content>
        <p>
          Para prosseguir com o cadastro completo, precisamos de algumas informações iniciais.
        </p>

        <Form>
          <input placeholder="Nome da Pessoa" type="text" value={name} onChange={(event) => this.setState({ name: event.target.value })} />
          <InputMask mask="999.999.999-99" placeholder="CPF" onChange={(event) => this.setState({ doc: event.target.value })} value={doc} />

          <select value={maritalStatus} onChange={(event) => this.setState({ maritalStatus: event.target.value })}>
            <option value="">
              Selecione o estado civil
            </option>
            { maritalStatusList.map(item => {
              return (
                <option value={item.id} key={item.id}>
                  { item.name }
                </option>
              )
            }) }
          </select>

          <ActionButtons>
            <button
              className="primary"
              onClick={(event) => this.personBehavior(event)}
            >
              <span className="text">
                Salvar
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
        </Form>
      </Content>
    )
  }

  render () {
    return (
      <ModalStructure width='700' title={`${Object.keys(this.props.person).length > 0 ? 'Editar' : 'Cadastrar'} Pessoa`} content={this.content} callback={() => this.closeModal()} />
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(PersonActions, dispatch)

export default connect(null, mapDispatchToProps, null)(DemostrationModal)