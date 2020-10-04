import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  PersonManagerModal,
  DeletePersonModal
} from 'components'
import {
  PersonContainer
} from './style'

class Person extends Component {
  static propTypes = {
    persons: PropTypes.array,
  }

  constructor (props) {
    super(props)

    this.state = {
      selectedPerson: {},
      personManager: false,
      deletePersonManager: false,
      search: ''
    }
  }

  get filteredPersons () {
    const { search } = this.state
    const { persons } = this.props

    return search !== '' && persons ? persons.filter(item => item.name.toLowerCase().includes(search.toLowerCase())) : persons
  }

  addPerson = () => {
    this.setState({
      personManager: true,
      selectedPerson: {}
    })
  }

  editPerson = (person) => {
    this.setState({
      personManager: true,
      selectedPerson: person
    })
  }

  deletePerson = (person) => {
    this.setState({
      deletePersonManager: true,
      selectedPerson: person
    })
  }

  maritalStatus = (status) => {
    const getMaritalStatus = (id) => ({
      1: 'Solteiro(a)',
      2: 'Casado(a)',
      3: 'Divorciado(a)',
      4: 'Viúvo(a)'
    }[id])

    return getMaritalStatus(status)
  }

  subMenuToggler = (e, open) => {
    e.persist()

    if (open) {
      const parent = e.target.closest('li')

      parent.querySelector('.sub-menu').classList.add('opened')
    } else {
      setTimeout(() => {
        const parent = e.target.closest('li')

        parent.querySelector('.sub-menu').classList.remove('opened')
      }, 200)
    }
  }

  render () {
    const { search } = this.state

    return (
      <PersonContainer>
        <div className="person-behavior">
          <h3>
            Lista de Pessoas
          </h3>

          <div className="behavior">
            <input
              type="text"
              className="search"
              placeholder="Buscar por nome"
              value={search}
              onChange={($event) => this.setState({ search: $event.target.value })}
            />
          </div>
        </div>

        <div className="person-list">
          <ul>
            <li className="add-grower">
              <button onClick={() => this.addPerson() }>
                <img src={ `${process.env.PUBLIC_URL}/img/add-circle-icon.svg` } alt="" />

                <span>
                  Adicionar pessoa
                </span>
              </button>
            </li>

            { this.filteredPersons.map((person, index) => {
              return (
                <li
                  key={person.id}
                >
                  <span className="label">
                    { person.name.substring(0, 1) }
                  </span>

                  <strong>
                    <span>
                      { person.doc }
                    </span>
                    <br />
                    <span>
                      { `${ person.maritalStatus ? `${this.maritalStatus(person.maritalStatus)}` : ''}` }
                    </span>
                    <br />

                    <strong>{ person.name }</strong>
                  </strong>

                  <div
                    className="sub-menu-toggle"
                    onMouseOver={(event) => this.subMenuToggler(event, true)}
                    onMouseLeave={(event) => this.subMenuToggler(event, false)}
                  >
                    <img src={ `${process.env.PUBLIC_URL}/img/more-icon.svg` } alt="" />

                    <div className="sub-menu">
                      <button onClick={() => this.deletePerson(person)}>
                        Excluir
                      </button>

                      <button onClick={() => this.editPerson(person)}>
                        Editar
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>

        { this.state.personManager &&
          <PersonManagerModal callback={() => this.setState({ personManager: false })} person={this.state.selectedPerson} />
        }

        { this.state.deletePersonManager &&
          <DeletePersonModal callback={() => this.setState({ deletePersonManager: false })} person={this.state.selectedPerson} />
        }
      </PersonContainer>
    )
  }
}

const mapStateToProps = (state) => ({
  persons: state.PersonReducer.persons
})

export default connect(mapStateToProps, null)(Person)