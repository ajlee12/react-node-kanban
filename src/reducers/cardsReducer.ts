// import CardComments from '../components/CardComments';
import * as types from '../constants/actionTypes';
import { CardsState, CardContents, CardsAction } from '../store/types';

const initialState: CardsState = [];
/* Old initialState (an object)
 {
  Applied: [
    {
      id: '0Eevi',
      name: 'Eevi',
      status: 'Applied',
      comments: ['10 years exp!'],
    }
  ],
  PhoneScreen: [
    {
      id: '0Pixie',
      name: 'Pixie',
      status: 'Phone Screen',
      comments: ['Just starting out..'],
    },
  ],
  OnSite: [],
  Offered: [],
  Accepted: [],
  Rejected: [],
};
*/

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
      
      /*
      oldApplicants = state[status].map((app: CardContents) => {
        // Find and update the targetted applicant's comments.
        if (app.id === id && app.name === name) {
          let updatedComments: string[] = [];

          // If an old comment exists, append new to old.
          if (app.comments.length) {
            updatedComments = [...app.comments, newComments];
          } else {
            updatedComments = [newComments];
          }

          const targettedApp = {
            id,
            name,
            status,
            comments: updatedComments,
          };

          return targettedApp;
        } else {
          // Make shallow copy of each applicant.
          return { ...app };
        }
      });
      */
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

    /*
    // Remove a card from state when it gets picked up from the DOM.
    case types.REMOVE_CURRENT_STATUS:
      // Target the correct status and filter out the card of concern.
      status = action.payload.currentStatus;
      id = action.payload.id;
      name = action.payload.name;

      const updatedApplicants = state[status].filter((app: CardContents) => {
        return app.id !== id && app.name !== name;
      });

      return {
        ...state,
        [status]: updatedApplicants,
      };
      */

    // When a card's status prop changes, its status in store is also updated.
    case types.CHANGE_STATUS:
      id = action.payload.id;
      status = action.payload.status;
      
      // const oldStatus = action.payload.oldStatus;
      // const newStatus = action.payload.newStatus;

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
