import storage from 'redux-persist/lib/storage'

const REDUX_PERSIST = {
  active: true,
  reducerVersion: '1.1',
  storeConfig: {
    key: 'primary',
    storage: storage,
    blacklist: ['login', 'search', 'nav', 'drawer']
  }
}

export default REDUX_PERSIST
