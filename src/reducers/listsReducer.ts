const initialState = [
  {
    name: 'Eevi',
  },
  {
    name: 'Pixie'
  },
];

const listsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
