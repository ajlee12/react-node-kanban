import React from 'react';
import CardComments from './CardComments';

interface CardProps {
  id: string,
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
      <CardComments id={props.id} />
    </div>
  );
};

export default Card;
