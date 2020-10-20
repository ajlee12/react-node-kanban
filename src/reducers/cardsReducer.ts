import * as types from '../constants/actionTypes';
import { CardsState, CardsAction } from '../store/types';

const initialState: CardsState = {
  Applied: [
    {
      name: 'Eevi',
      status: 'Applied',
      comments: '10 years exp!',
    }
  ],
  PhoneScreen: [
    {
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

const cardsReducer = (state: CardsState = initialState, action: CardsAction) => {
  switch (action.type) {
    // Changes an applicant's status when the card is dragged to a different column.
    // case types.CHANGE_STATUS:


    default:
      return state;
  }
};

export default cardsReducer;
