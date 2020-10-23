import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Action } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import actions from '../actions/actionCreators';
import { CardsState } from '../store/types';

const mapDispatchToProps = (dispatch: ThunkDispatch<CardsState, null, Action>) => ({
  addCommentsThunk: (id: string, inputText: string) => {
    // e.preventDefault();
    dispatch(actions.addCommentsThunk(id, inputText));
  },
});

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

type CardCommentsProps = ReduxProps & {
  id: string,
  name: string,
  listTitle: string,
  // addComments: ReturnType<typeof mapDispatchToProps> | any,
  // addCommentsThunk: (e: FormEvent, inputText: string, name: string, listTitle: string) => void,
};

const CardComments = (props: CardCommentsProps) => {
  const [input, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Prevents reload upon submit.
    e.preventDefault();

    setInputValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    console.log('target.id (handleSubmit, <CardComments/>)', target.id);

    props.addCommentsThunk(target.id, input);
    setInputValue('');
  };

  return (
    <div className='comments-div'>
      <form
        className='input-form'
        id={props.id}
        name={props.name}
        onSubmit={handleSubmit}
      >
        <h4>Add comments:</h4>
        <span className='input-span'>
          <input
            type="text"
            placeholder='Comments..'
            value={input}
            onChange={handleChange}
          />
        </span>
      </form>
    </div>
  );
};

export default connector(CardComments);
