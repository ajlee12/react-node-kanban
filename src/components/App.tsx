import React, { FC } from 'react';
import { connect } from 'react-redux';

import List from './List';
import { CardsState } from '../store/types';

const mapStateToProps = (store: CardsState) => ({
  Applied: store.Applied,
  PhoneScreen: store.PhoneScreen,
});

// type AppProps = {
  
// };

const App: FC<CardsState> = (props) => {
  return (
    <div className="App" style={styles}>
      {/* <h1>Hello World!</h1> */}
      <List listTitle={'Applied'} listContents={props.Applied} />
      <List listTitle={'Phone Screen'} listContents={props.PhoneScreen} />
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default connect(mapStateToProps, null)(App);
