import React from 'react';
import List from './List';
import AddCardButton from './AddCardButton';

const App = () => {
  return (
    <div id='App' >
      <AddCardButton />
      <div style={styles}>
        <List id='list-Applied' listTitle={'Applied'} />
        <List id='list-PhoneScreen' listTitle={'PhoneScreen'} />
        <List id='list-OnSite' listTitle={'OnSite'} />
        <List id='list-Offered' listTitle={'Offered'} />
        <List id='list-Accepted' listTitle={'Accepted'} />
        <List id='list-Rejected' listTitle={'Rejected'} />
      </div>
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default App;
