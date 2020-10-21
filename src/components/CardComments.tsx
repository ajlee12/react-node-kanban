import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import actions from '../actions/actionCreators';

interface CardCommentsProps {
  id: string,
  name: string,
  listTitle: string,
  // addComments: ReturnType<typeof mapDispatchToProps> | any,
  addComments: (e: FormEvent, inputText: string, name: string, listTitle: string) => void,
};

const CardComments = (props: CardCommentsProps) => {
  const [input, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Prevents reload upon submit.
    e.preventDefault();

    setInputValue(e.target.value);
  };

  return (
    <div className='comments-div'>
      <form
        className='input-form'
        id={props.id}
        name={props.name}
        onSubmit={(e) => props.addComments(e, input, props.name, props.listTitle)}
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addComments: (e: FormEvent, inputText: string, name: string, listTitle: string) => {
    e.preventDefault();
    dispatch(actions.addComments((e.target as HTMLFormElement).id, inputText, name, listTitle));
  },
});

export default connect(null, mapDispatchToProps)(CardComments);
