import { createStore, applyMiddleware, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

import appReducer from './combineReducer';
import appSaga from './sagas';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth, user'],
    blacklist: ['saleOrder', 'draft']
};

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Add all middlewares into an array
const middleware = [sagaMiddleware];

// Add the Redux dev tools and middleware code together
const bindMiddleware = (middleware: Middleware[]) => {
    // if (process.env.NODE_ENV !== 'production') {
    // 	return composeWithDevTools(applyMiddleware(...middleware));
    // }
    return composeWithDevTools(applyMiddleware(...middleware));
};

// add all reducers
const allPersistReducers = persistReducer(persistConfig, appReducer);

// Mount it on the Store
const store = createStore(allPersistReducers, bindMiddleware(middleware));

// Create a persistor with store
const persistor = persistStore(store);

// Run the saga
sagaMiddleware.run(appSaga);

export { store, persistor };
