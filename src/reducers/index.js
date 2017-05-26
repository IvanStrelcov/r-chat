import { routerReducer as router } from 'react-router-redux';
import { combineReducers } from 'redux';

import messages from './messages';

export default combineReducers({
  router,
  messages,
});
