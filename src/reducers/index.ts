import { combineReducers } from 'redux';
// import listsReducer from './listsReducer';
import cardsReducer from './cardsReducer';

const reducers = combineReducers({
  // lists: listsReducer,
  cards: cardsReducer,
});

export default reducers;