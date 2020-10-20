import React, { FC } from 'react';

const CardComments: FC = () => {
  return (
    <div>
      This a CardComments component.
      <form>
        <h4>Add comments:</h4>
        <input type="text" placeholder='Comments..'></input>
      </form>
    </div>
  );
};

export default CardComments;
