import React, { CSSProperties } from 'react';
import CardComments from './CardComments';

type CardProps = {
  name: string,
  comments: string,
};

const Card = (props: CardProps) => {
  return (
    <div style={styles}>
      This is a Card component.
      {props.name}
      {props.comments}
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
