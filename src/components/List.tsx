import React, { DragEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { CardContents, AppState } from '../store/types';
import actions from '../actions/actionCreators';
import Card from './Card';

const mapStateToProps = (store: AppState) => (
  store.cards
  // {
  //   Applied: store.cards.Applied,
  //   PhoneScreen: store.cards.PhoneScreen,
  //   OnSite: store.cards.OnSite,
  //   Offered: store.cards.Offered,
  //   Accepted: store.cards.Accepted,
  //   Rejected: store.cards.Rejected,
  // }
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeStatus: (id: string, name: string, oldStatus: string, newStatus: string) => {
    dispatch(actions.changeStatus(id, name, oldStatus, newStatus));
  },
});

interface ListProps {
  // This allows accessing of a props' prop using `props[listTitle]`.
  [key: string]: any,

  // listTitle: string,
  // Applied: CardContents[],
  // PhoneScreen: CardContents[],
  // OnSite: CardContents[],
  // Offered: CardContents[],
  // Accepted: CardContents[],
  // Rejected: CardContents[],
};

const List = (props: ListProps) => {
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
    const name = card.dataset.name;
    const oldStatus = card.dataset.status;
    // Get the name of the new list this card landed on.
    const newStatus = target.childNodes.item(0).textContent;

    console.log(`In List (drop func.)\n`, `id: ${id}, name: ${name}, oldStatus: ${oldStatus}, newStatus: ${newStatus}`);
    // setTimeout(() => props.changeStatus(id, name, oldStatus, newStatus), 0);
    
    // The conditional check prevents dragging to own List that led to duplicating the card.
    // if (oldStatus !== newStatus) props.changeStatus(id, name, oldStatus, newStatus);
    
    card.setAttribute('data-status', newStatus!);
    // console.log('card after setAttrib.:', card);
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
      <h2>{props.listTitle}</h2>
      {props[listTitle].map((card: CardContents, i: number) => {
        return ( 
          <Card
            key={`${props.listTitle}${i}`}
            
            /*
             * This id will later be replaced by the Mongo-generated ID.
             */
            id={`${i}${card.name}`}
            name={card.name}
            comments={card.comments}
            listTitle={listTitle}
          />
        );
      })}
    </div>
  );
};

/* 
 * The 2nd arg 'null' caused TS error in App.tsx:
 * Property 'id' does not exist on type 'IntrinsicAttributes & Pick<ListProps, never>'
 * The 'null' was later replaced by mapDispatchToProps.
 */
export default connect(mapStateToProps, mapDispatchToProps)(List);
