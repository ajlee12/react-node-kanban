import React from 'react';
import { connect } from 'react-redux';
import { CardContents, AppState } from '../store/types';
import Card from './Card';
import AddCardButton from './AddCardButton';

const mapStateToProps = (store: AppState) => ({
  Applied: store.cards.Applied,
  PhoneScreen: store.cards.PhoneScreen,
});

interface ListPropsKeys {
  [key: string]: any,
};

interface ListProps extends ListPropsKeys { 
  // listTitle: string,
  Applied: CardContents[],
  PhoneScreen: CardContents[],
};

//{listTitle, Applied, PhoneScreen }

const List = (props: ListProps) => {
  const listTitle = props.listTitle;
  return (
    <div className='lists'>
      <h2>{props.listTitle}</h2>
      <AddCardButton />
      {/* <button></button> */}
      This is a List component.
      {/* {console.log('props in List:',props)} */}
      {/* {console.log('props[listTitle]:', props[listTitle])} */}
      {props[listTitle].map((card: CardContents, i: number) => {
        return ( 
          <Card
            key={`${props.listTitle}${i}`}
            id={`${i}${card.name}`}
            name={card.name}
            comments={card.comments}
            listTitle={props.listTitle}
          />
        );
      })}
      {/* <Card /> */}
    </div>
  );
};

export default connect(mapStateToProps, null)(List);
