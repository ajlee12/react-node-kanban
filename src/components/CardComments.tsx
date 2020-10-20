import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/actionCreators';

interface CardCommentsProps {
  id: string,
  addComments: ReturnType<typeof mapDispatchToProps> | any,
};

let inputText: string;

const CardComments = (props: CardCommentsProps) => {
  const [input, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Prevents reload upon submit.
    e.preventDefault();

    setInputValue(e.target.value);
    inputText = input;
  };

  // const handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   props.addComments(e.target.id, );
  // };

  return (
    <div>
      This a CardComments component.
      <form id={props.id} onSubmit={(e) => props.addComments(e)}>
        <h4>Add comments:</h4>
        <input type="text" placeholder='Comments..' value={input} onChange={handleChange} />
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addComments: (e: FormEvent) => {
    // console.log('target ID: ', (e.target as HTMLFormElement).id, ', inputText: ', inputText);
    e.preventDefault();
    dispatch(actions.addComments((e.target as HTMLFormElement).id, inputText));
  },
});

export default connect(null, mapDispatchToProps)(CardComments);
