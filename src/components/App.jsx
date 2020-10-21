import React from 'react';
import List from './List';

// interface Props {};

const App = () => {
  return (
    <div id='App' style={styles}>
      <List id='list-Applied' listTitle={'Applied'} />
      <List id='list-PhoneScreen' listTitle={'PhoneScreen'} />
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default App;
