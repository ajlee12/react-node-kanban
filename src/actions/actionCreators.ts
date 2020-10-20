import * as types from '../constants/actionTypes';

// 'status' indicates which list the applicant is on.
const addComments = (id: string, comments: string, name: string, status: string) => ({
  type: types.ADD_COMMENTS,
  payload: {
    id,
    comments,
    name,
    status,
  },
});

const actions = {
  addComments,
};

export default actions;
