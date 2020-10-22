import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'elections',
  storage: storage,
  whitelist: ['elections'], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const initialState = {};

const middleware = [thunk];

const store = createStore(
  pReducer,
  initialState,
  applyMiddleware(...middleware)
);

persistStore(store);

export default store;
