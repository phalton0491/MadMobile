import * as React from 'react';
import MainContainer from './MainContainer/MainContainer';
import { UsersContext, useProvideUsersContext } from './state/users.state';
import './style.css';

const App = () => {
  const usersState = useProvideUsersContext();

  return (
    <div>
      <UsersContext.Provider value={usersState}>
        <MainContainer />
      </UsersContext.Provider>
    </div>
  );
};

export default App;
