import * as types from '../constants/actionTypes';

// const actions = {};

const addComments = (id: string, comments: string) => ({
  type: types.ADD_COMMENTS,
  payload: {
    id,
    comments,
  },
});

export default addComments;
