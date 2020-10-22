import * as types from '../constants/actionTypes';
import { CardsState, CardContents, CardsAction } from '../store/types';

const initialState: CardsState = {
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

const cardsReducer = (state: {[ key: string ]: any } = initialState, action: CardsAction) => {
  // console.log('action payload (cardsReducer): ', action.payload);
  let id: string;
  let newComments: string;
  let name: string;
  let status: string;
  let oldApplicants: CardContents[];
  
  switch (action.type) {
    case types.ADD_COMMENTS:
      id = action.payload.id;
      newComments = action.payload.comments;
      name = action.payload.name;
      status = action.payload.status;
      
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

      return {
        ...state,
        [status]: [ ...oldApplicants ],
      };

    case types.ADD_CARD:
      const newCard = {
        id: action.payload.id,
        name: action.payload.name,
        status: 'Applied',
        comments: action.payload.comments,
      };

      // Make shallow copies.
      oldApplicants = state.Applied.map((app: CardContents) => {
        return { ...app };
      });
      
      return {
        ...state,
        Applied: [ ...oldApplicants, newCard ],
      };

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

    // When a card's status prop changes, it should also 
    // be moved to the array corrersponding to this new status.
    case types.CHANGE_STATUS:
      // console.log(`reducer: CHANGE_STATUS payload:`, action.payload);
      id = action.payload.id;
      name = action.payload.name;
      
      const oldStatus = action.payload.oldStatus;
      const newStatus = action.payload.newStatus;

      // Save the old comments, as it's the only value not included in payload.
      let originalComments: string[];
      
      console.log('state[oldStatus] BEFORE:', state[oldStatus]);

      let dupesCount = 0;
      // Remove the targetted app from its original array.
      oldApplicants = state[oldStatus].filter((app: CardContents, i: number) => {
        if (app.id !== id && app.name !== name && dupesCount < 1) {
          dupesCount += 1;
          // return app.id !== id && app.name !== name;
          return true;
        } else if (dupesCount < 1) {
          originalComments = app.comments;
        }
        return false;
      });

      console.log('oldApplicants:', oldApplicants);

      const updatedTargettedApp = {
        id,
        name,
        status: newStatus,
        comments: originalComments!,
      };
      
      // Add to array that corresponds to the new status.
      return {
        ...state,
        [oldStatus]: oldApplicants,
        [newStatus]: [...state[newStatus], updatedTargettedApp],
      };

    default:
      return state;
  }
};

export default cardsReducer;
