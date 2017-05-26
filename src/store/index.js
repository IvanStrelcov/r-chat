import {
  createStore,
  applyMiddleware,
} from 'redux';

import {
  routerMiddleware,
} from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const history = createHistory();
const middlewares = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  middlewares.push(
    require('redux-logger').createLogger({}),
  );
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares),
);

export {
  store,
  history,
};
