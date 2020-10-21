// import { Reducer } from 'redux';
import * as types from '../constants/actionTypes';
import { CardsState, CardContents, CardsAction } from '../store/types';

const initialState: CardsState = {
  Applied: [
    {
      id: '0Eevi',
      name: 'Eevi',
      status: 'Applied',
      comments: '10 years exp!',
    }
  ],
  PhoneScreen: [
    {
      id: '0Pixie',
      name: 'Pixie',
      status: 'Phone Screen',
      comments: 'Just starting out..',
    },
  ],
  OnSite: [],
  Offered: [],
  Accepted: [],
  Rejected: [],
};

const cardsReducer = (state: {[ key: string ]: any } = initialState, action: CardsAction) => {
  let id: string;
  let newComments: string;
  let name: string;
  let status: string;
  
  switch (action.type) {
    case types.ADD_COMMENTS:
      // console.log('action payload (cardsReducer): ', action.payload);
      // console.log('payload.id (cardsReducer): ', action.payload.id);
      // console.log('payload.comments (cardsReducer): ', action.payload.comments);
      
      id = action.payload.id;
      newComments = action.payload.comments;
      name = action.payload.name;
      status = action.payload.status;
      
      const applicants: CardContents[] = state[status].map((app: CardContents) => {
        // Find and update the targetted applicant's comments.
        if (app.id === id && app.name === name) {
          let updatedComments: string = '';

          // If an old comment exists, append new to old.
          if (app.comments) {
            updatedComments = `${app.comments}\n${newComments}`;
          } else {
            updatedComments = newComments;
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

      return {
        ...state,
        [status]: [ ...applicants ],
      };

    case types.ADD_CARD:
      const newCard = {
        id: action.payload.id,
        name: action.payload.name,
        status: 'Applied',
        comments: action.payload.comments,
      };

      // Make shallow copies.
      const oldAppliedCards = state.Applied.map((app: CardContents) => {
        return { ...app };
      });
      
      return {
        ...state,
        Applied: [ ...oldAppliedCards, newCard ],
      };

    default:
      return state;
  }
};

export default cardsReducer;
