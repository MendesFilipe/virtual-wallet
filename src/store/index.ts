import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ducks from './ducks'; 

const enhancer = composeWithDevTools({});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users', 'transactions'],
  blacklist: []
};

const persistedReducer = persistReducer(persistConfig, ducks);

const store = createStore(persistedReducer, enhancer());

export const persistor = persistStore(store);
export default store;
