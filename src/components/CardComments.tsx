import React, { FC, useState, ChangeEvent } from 'react';

const CardComments: FC = () => {
  const [input, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Prevents reload upon submit.
    e.preventDefault();

    setInputValue(e.target.value);
  };

  return (
    <div>
      This a CardComments component.
      <form >
        <h4>Add comments:</h4>
        <input type="text" placeholder='Comments..' value={input} onChange={handleChange} />
      </form>
    </div>
  );
};

export default CardComments;
