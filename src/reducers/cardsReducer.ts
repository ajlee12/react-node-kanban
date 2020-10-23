import * as types from '../constants/actionTypes';
import { CardsState, CardContents, CardsAction } from '../store/types';

const initialState: CardsState = [];

const cardsReducer = (state = initialState, action: CardsAction) => {
  console.log('********');
  console.log('action payload (cardsReducer): ', action.payload);
  console.log('');

  let id: string;
  let newComments: string;
  // let name: string;
  let status: string;
  // let oldApplicants: CardContents[];
  let newStateArray: CardContents[];
  
  switch (action.type) {
    case types.ADD_COMMENTS:
      id = action.payload.id;
      newComments = action.payload.comments;

      newStateArray = state.map((card) => {
        return card.id === id ? {
          ...card,
          comments: card.comments.concat(newComments),
        } :
        { ...card }
      })
            
      return newStateArray;

    case types.ADD_CARD:
      const newCard = {
        id: action.payload.id,
        name: action.payload.name,
        status: 'Applied',
        comments: [action.payload.comments],
      };

      // Make shallow copies of cards.
      newStateArray = state.map((card) => {
        return { ...card };
      });
      
      return newStateArray.concat(newCard);

    case types.SYNC_CARDS:
      return action.payload;

    // When a card's status prop changes, its status in store is also updated.
    case types.CHANGE_STATUS:
      id = action.payload.id;
      status = action.payload.status;

      newStateArray = state.map((card) => {
        return card.id === id ? {
          ...card,
          status,
        } :
        { ...card }
      })
            
      return newStateArray;

    default:
      return state;
  }
};

export default cardsReducer;
