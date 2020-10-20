import React from 'react';
// import { connect } from 'react-redux';

import List from './List';

// type AppProps = {
  
// };

const App = () => {
  return (
    <div className="App" style={styles}>
      {/* <h1>Hello World!</h1> */}
      <List listTitle={'Applied'} />
      <List listTitle={'Phone Screen'} />
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default App;
