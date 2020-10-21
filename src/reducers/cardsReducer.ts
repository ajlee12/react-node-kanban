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
  switch (action.type) {
    case types.ADD_COMMENTS:
      // console.log('action payload (cardsReducer): ', action.payload);
      // console.log('payload.id (cardsReducer): ', action.payload.id);
      // console.log('payload.comments (cardsReducer): ', action.payload.comments);
      
      const id: string = action.payload.id;
      const newComments: string = action.payload.comments;
      const name: string = action.payload.name;
      const status: string = action.payload.status;
      
      // Find and update the targetted applicant's comments.
      const applicants: CardContents[] = state[status].map((app: CardContents) => {
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
          return { ...app };
        }
      });

      return {
        ...state,
        [status]: [ ...applicants ],
      };

    case types.ADD_CARD:

      return state;
      
    default:
      return state;
  }
};

export default cardsReducer;
