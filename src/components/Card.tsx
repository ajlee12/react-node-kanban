import React, { DragEvent } from 'react';
import CardComments from './CardComments';

interface CardProps {
  id: string,
  name: string,
  comments: string,
  listTitle: string,
};

const Card = ({ id, name, comments, listTitle }: CardProps) => {
  const dragStart = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;

    // cloneNode(target.parentNode!, target);

    e.dataTransfer.setData('card_id', target.id);

    // This allows the card being dragged to disappear
    // from the original list but remains on the cursor.
    // If no timeout, the card would disappear altogether.
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  // This cloning func may NOT be needed..
  const cloneNode = (parent: (Node & ParentNode), child: HTMLDivElement) => {
    // clone child and append to parent.
    const clone = child.cloneNode(true);
    // console.log('cloning! Node =', clone);
    parent.appendChild(clone);
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
      <span>Comments: {comments}</span>
      <CardComments id={id} name={name} listTitle={listTitle} />
    </div>
  );
};

export default Card;
