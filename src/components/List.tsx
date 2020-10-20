import React, { CSSProperties, FC } from 'react';
import { CardContents } from '../store/types';
import Card from './Card';

type ListProps = { 
  listTitle: string,
  listContents: CardContents[],
};

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

export default List;
