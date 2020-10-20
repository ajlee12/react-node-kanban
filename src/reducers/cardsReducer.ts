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
    // Changes an applicant's status when the card is dragged to a different column.
    case types.ADD_COMMENTS:
      // console.log('action payload (cardsReducer): ', action.payload);
      // console.log('payload.id (cardsReducer): ', action.payload.id);
      // console.log('payload.comments (cardsReducer): ', action.payload.comments);
      
      const id: string = action.payload.id;
      const newComments: string = action.payload.comments;
      const name: string = action.payload.name;
      const status: string = action.payload.status;

      // Filter out the applicant of concern.
      // const otherApplicants: CardContents[] = state[status].filter((app: CardContents) => {
      //   return app.id !== id && app.name !== name;
      // });
      // console.log('applicant: ', applicant);
      
     
      const applicants: CardContents[] = state[status].map((app: CardContents) => {
        if (app.id === id && app.name === name) {
          const targetted = {
            id,
            name,
            status,
            comments: newComments,
          };

          return targetted;
        } else {
          return { ...app };
        }
      });

      // console.log('applicant: ', applicant);
      // Replace the targetted applicant's 'comments' value.
      // const applicant = {
      //   id,
      //   name,
      //   status,
      //   comments: newComments,
      // }

      return {
        ...state,
        [status]: [ ...applicants ],
      };

    default:
      return state;
  }
};

export default cardsReducer;
