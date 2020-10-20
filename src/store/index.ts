import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers/index';
import { CardsState } from './types'

const store: Store<CardsState> = createStore(
  reducers,
  composeWithDevTools(),
);

export default store;
