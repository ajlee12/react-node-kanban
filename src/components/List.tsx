import React, { useState, useEffect, DragEvent } from 'react';
import { Action } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { CardsState, CardContents, AppState } from '../store/types';
import actions from '../actions/actionCreators';
import Card from './Card';

const mapStateToProps = (store: AppState) => (
  { cards: store.cards }
);

const mapDispatchToProps = (dispatch: ThunkDispatch<CardsState, null, Action>) => ({
  getAllCardsFromDbThunk: () => {
    dispatch(actions.getAllCardsFromDbThunk());
  },
  changeStatusThunk: (id: string, status: string) => {
    dispatch(actions.changeStatusThunk(id, status));
  },
});

interface ListProps {
  // This allows accessing of a props' prop using `props[listTitle]`.
  [key: string]: any,
};

const List = (props: ListProps) => {
  const [cards, getCards] = useState([]);

  useEffect(() => {
    getCards(props.getAllCardsFromDbThunk());
  }, []);

  const listTitle: string = props.listTitle;
  
  /*
   * When receiving a "drop" event, dispatch action
   * to change the status of the dropped card.
   */ 
  const drop = (e: DragEvent) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData('card_id');
    console.log('cardd_id in drop():', card_id);
    
    const card = document.getElementById(card_id)!;
    card.style.display = 'flex';
    
    const target = e.target as HTMLDivElement;
    target.appendChild(card);

    const id = card.id;

    // Get the name of the new list this card landed on.
    const newStatus = target.childNodes.item(0).textContent;

    props.changeStatusThunk(id, newStatus);
    
    card.setAttribute('data-status', newStatus!);
  };

  const dragOver = (e: DragEvent) => {
    /*
     * By default, data/elements cannot be dropped in other elements.
     * Therefore, we prevent the default behavior.
     */ 
    e.preventDefault();
  };

  return (
    <div
      onDrop={drop}
      onDragOver={dragOver}  
      className='lists'
      id={props.id}
    >
      <h2>{listTitle}</h2>
      {props.cards && props.cards.map((card: CardContents, i: number) => {
        if (card.status === listTitle) {
          return <Card
            id={card.id}
            key={`${listTitle}${i}`}
            name={card.name}
            comments={card.comments}
            listTitle={listTitle}
          />
        }
      })
      }
    </div>
  );
};

/* 
 * The 2nd arg 'null' caused TS error in App.tsx:
 * Property 'id' does not exist on type 'IntrinsicAttributes & Pick<ListProps, never>'
 * The 'null' was later replaced by mapDispatchToProps.
 */
export default connect(mapStateToProps, mapDispatchToProps)(List);
