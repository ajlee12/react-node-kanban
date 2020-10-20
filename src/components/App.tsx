import React, { FC } from 'react';
import List from './List';

const App: FC = () => {
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
