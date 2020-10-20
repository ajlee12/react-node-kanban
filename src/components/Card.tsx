import React from 'react';
import CardComments from './CardComments';

interface CardProps {
  id: string,
  name: string,
  comments: string,
  listTitle: string,
};

const Card = ({ id, name, comments, listTitle }: CardProps) => {
  return (
    <div className='cards'>
      This is a Card component.
      <span>Name: {name}</span>
      <span>Comments: {comments}</span>
      <CardComments id={id} name={name} listTitle={listTitle} />
    </div>
  );
};

export default Card;
