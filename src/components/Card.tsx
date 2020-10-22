import React, { DragEvent } from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import CardComments from './CardComments';
import actions from '../actions/actionCreators';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeCurrentStatus: (
    id: string,
    name: string,
    currentStatus: string,
  ) => {
    dispatch(actions.removeCurrentStatus(id, name, currentStatus));
  },
});

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>

type CardProps = ReduxProps & {
  id: string,
  name: string,
  comments: string,
  listTitle: string,
};

const Card = ({ removeCurrentStatus, id, name, comments, listTitle }: CardProps) => {
  const dragStart = (e: DragEvent) => {
    const target = e.target as HTMLDivElement;

    // cloneNode(target.parentNode!, target);

    e.dataTransfer.setData('card_id', target.id);

    /*
     * Try updating the store and remove the dragged card as soon as it gets picked up.
     * See if this solves the bug of `Failed to execute 'removeChild' on 'Node'`.
     */
    const cardId = target.id;
    const name = target.dataset.name!;
    const currentStatus = target.dataset.status!;

    removeCurrentStatus(cardId, name, currentStatus);
    
    // This allows the card being dragged to disappear
    // from the original list but remains on the cursor.
    // If no timeout, the card would disappear altogether.
    setTimeout(() => {
      target.style.display = 'none';
    }, 0);
  };

  /* This cloning func may NOT be needed..
  const cloneNode = (parent: (Node & ParentNode), child: HTMLDivElement) => {
    // clone child and append to parent.
    const clone = child.cloneNode(true);
    // console.log('cloning! Node =', clone);
    parent.appendChild(clone);
  };
  */

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

export default connector(Card);
