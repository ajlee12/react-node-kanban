import React from 'react';
import List from './List';
import AddCardButton from './AddCardButton';

// interface Props {};

const App = () => {
  return (
    <div id='App' style={styles}>
      <List id='list-Applied' listTitle={'Applied'}>
        {/* <AddCardButton /> */}
      </List>
      <List id='list-PhoneScreen' listTitle={'PhoneScreen'} />
      <List id='list-OnSite' listTitle={'OnSite'} />
      <List id='list-Offered' listTitle={'Offered'} />
      <List id='list-Accepted' listTitle={'Accepted'} />
      <List id='list-Rejected' listTitle={'Rejected'} />
    </div>
  );
};

const styles = {
  display: 'flex',
};

export default App;
