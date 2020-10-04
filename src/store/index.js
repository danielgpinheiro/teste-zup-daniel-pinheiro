import { combineReducers } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import { reducer as toastrReducer } from 'react-redux-toastr'
import createStore from './CreateStore'
import ReduxPersist from 'helper/reduxPersist'
import PersonReducer from './reducers/PersonReducer'

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  PersonReducer,
  toastr: toastrReducer
})

export default () => {
  let finalReducers = reducers

  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, reducers)
  }

  let store = createStore(finalReducers)
  let persistor = persistStore(store)

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(require('./').reducers)
    })
  }

  return { store, persistor }
}
