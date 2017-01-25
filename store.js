import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

import rootReducer from './reducers/index.js';

const defaultState = {
}

const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(hashHistory,store);

export default store;