import React from 'react';
import CardComments from './CardComments';

interface CardProps {
  name: string,
  comments: string,
  listTitle: string,
};

const Card = (props: CardProps) => {
  return (
    <div className='cards'>
      This is a Card component.
      <span>Name: {props.name}</span>
      <span>Comments: {props.comments}</span>
      <CardComments />
    </div>
  );
};

export default Card;
