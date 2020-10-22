import React, { DragEvent } from 'react';
// import { connect, ConnectedProps } from 'react-redux';
import CardComments from './CardComments';


type CardProps = {
  id: string,
  name: string,
  comments: string[],
  listTitle: string,
};

const Card = ({ id, name, comments, listTitle }: CardProps) => {
  const dragStart = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;

    e.dataTransfer.setData('card_id', target.id);

    e.dataTransfer.effectAllowed = "copy";

    // This allows the card being dragged to disappear
    // from the original list but remains on the cursor.
    // If no timeout, the card would disappear altogether.
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  const dragOver = (e: DragEvent) => {
    e.stopPropagation();
  };

  return (
    <div
      id={id}
      data-status={listTitle}
      data-name={name}
      className='cards'
      draggable='true'
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <span>Name: {name}</span>
      {comments.map((comment: string) => <span>{comment}</span>)}
      <CardComments id={id} name={name} listTitle={listTitle} />
    </div>
  );
};

export default Card;
