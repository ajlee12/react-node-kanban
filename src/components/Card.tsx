import React, { FC } from 'react';
import CardComments from './CardComments';

const Card: FC = () => {
  return (
    <div>
      This is a Card component.
      <CardComments />
    </div>
  );
};

export default Card;
