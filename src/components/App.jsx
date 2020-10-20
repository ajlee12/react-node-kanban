import React from 'react';
import List from './List';

// interface Props {};

const App = () => {
  return (
    <div className="App" style={styles}>
      <List listTitle={'Applied'} />
      <List listTitle={'PhoneScreen'} />
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default App;
