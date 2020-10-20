import React from 'react';
import List from './List';

const App = () => {
  return (
    <div className="App" style={styles}>
      <List listTitle={'Applied'} />
      <List listTitle={'Phone Screen'} />
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default App;
