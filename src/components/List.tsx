import React, { CSSProperties } from 'react';
import { connect } from 'react-redux';
import { CardContents, AppState } from '../store/types';
import Card from './Card';

const mapStateToProps = (store: AppState) => ({
  Applied: store.cards.Applied,
  PhoneScreen: store.cards.PhoneScreen,
});

type ListProps = { 
  listTitle: string,
  Applied?: CardContents[],
  PhoneScreen?: CardContents,
};

//{listTitle, Applied, PhoneScreen }

const List = (props: ListProps) => {
  return (
    <div style={styles}>
      <h2>{props.listTitle}</h2>
      This is a List component.
      {console.log(props.Applied)}
      {props.Applied?.map((card) => {
        // return `${card.name}, ${card.comments}`
        return <Card name={card.name} comments={card.comments} />
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
