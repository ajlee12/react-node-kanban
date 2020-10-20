import React, { CSSProperties, FC } from 'react';
import CardComments from './CardComments';

const Card: FC = () => {
  return (
    <div style={styles}>
      This is a Card component.
      <CardComments />
    </div>
  );
};

const styles: CSSProperties = {
  backgroundColor: '#D4E6F1',
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default Card;
