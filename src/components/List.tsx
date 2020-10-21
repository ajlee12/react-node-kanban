import React, { DragEvent } from 'react';
import { connect } from 'react-redux';
import { CardContents, AppState } from '../store/types';
import Card from './Card';
import AddCardButton from './AddCardButton';

const mapStateToProps = (store: AppState) => ({
  Applied: store.cards.Applied,
  PhoneScreen: store.cards.PhoneScreen,
  OnSite: store.cards.OnSite,
  Offered: store.cards.Offered,
  Accepted: store.cards.Accepted,
  Rejected: store.cards.Rejected,
});

interface ListPropsKeys {
  [key: string]: any,
};

interface ListProps extends ListPropsKeys { 
  // listTitle: string,
  Applied: CardContents[],
  PhoneScreen: CardContents[],
};

const List = (props: ListProps) => {
  const listTitle = props.listTitle;

  // <List/> will receive a "drop" event.
  const drop = (e: DragEvent) => {
    e.preventDefault();

    const card_id = e.dataTransfer.getData('card_id');
    console.log('card_id onDrop in List: ', card_id);

    const card = document.getElementById(card_id)!;
    card.style.display = 'block';

    (e.target as HTMLDivElement).appendChild(card);
  };

  const dragOver = (e: DragEvent) => {
    // By default, data/elements cannot be dropped in other elements.
    // Therefore, we prevent the default behavior.
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
      <AddCardButton />
      {props[listTitle].map((card: CardContents, i: number) => {
        return ( 
          <Card
            key={`${props.listTitle}${i}`}
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

export default connect(mapStateToProps, null)(List);
