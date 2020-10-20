import * as types from '../constants/actionTypes';

const addComments = (id: string, comments: string) => ({
  type: types.ADD_COMMENTS,
  payload: {
    id,
    comments,
  },
});

const actions = {
  addComments,
};

export default actions;
