import React from 'react';
// import { connect } from 'react-redux';

import List from './List';

// type AppProps = {
  
// };

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
