import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ReduxToastr from 'react-redux-toastr'
import { Person } from 'screens'
import './style.scss'
import {
  Wrapper,
  Container,
  Content,
  Header
} from './style' 

import createStore from 'store'

const { store, persistor } = createStore()

class App extends Component {
  render () {
    return (
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <Wrapper>
            <Container>
              <Header>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="active"
                    >
                      <img src={ `${process.env.PUBLIC_URL}/img/people-icon.svg` } alt="" />

                      <span>Pessoas</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <img src={ `${process.env.PUBLIC_URL}/img/grid-icon.svg` } alt="" />

                      <span>Menu 2</span>
                    </a>
                  </li>

                  <li>
                    <a href="/">
                      <img src={ `${process.env.PUBLIC_URL}/img/grid-icon.svg` } alt="" />

                      <span>Configurações</span>
                    </a>
                  </li>
                </ul>

                <div className="buttons">
                  <button>
                    <img src={ `${process.env.PUBLIC_URL}/img/alert-circle-icon.svg` } alt="" />

                    <span>Notificações</span>
                  </button>

                  <button>
                    <img src={ `${process.env.PUBLIC_URL}/img/person-icon.svg` } alt="" />

                    <span>Username</span>
                  </button>
                </div>
              </Header>

                <BrowserRouter>
                  <Switch>
                    <Content>
                      <Route path='/' exact component={ Person } />
                    </Content>
                  </Switch>
                </BrowserRouter>
            </Container>
          </Wrapper>

          <ReduxToastr
            timeOut={ 3000 }
            newestOnTop
            preventDuplicates
            position='top-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
            progressBar
            closeOnToastrClick
          />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
