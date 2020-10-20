import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import { CardContents, AppState } from '../store/types';
import Card from './Card';

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
    <div style={styles}>
      <h2>{props.listTitle}</h2>
      This is a List component.
      {/* {console.log('props in List:',props)} */}
      {console.log('props[listTitle]:',props[listTitle])}
      {props[listTitle].map((card: CardContents) => {
        return ( 
          <Card 
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

const styles: CSSProperties = {
  backgroundColor: '#5DADE2',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default connect(mapStateToProps, null)(List);
