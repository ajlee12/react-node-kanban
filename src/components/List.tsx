import React, { CSSProperties, FC } from 'react';
import { connect } from 'react-redux';
import { CardContents, CardsState } from '../store/types';
import Card from './Card';

type ListProps = { 
  listTitle: string,
  // listContents: CardContents[],
};

const mapStateToProps = (store: CardsState) => ({
  Applied: store.Applied,
  PhoneScreen: store.PhoneScreen,
});

const List: FC<ListProps> = ({listTitle}) => {
  return (
    <div style={styles}>
      <h2>{listTitle}</h2>
      This is a List component.
      <Card />
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
