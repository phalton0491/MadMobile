import * as React from 'react';

export const UsersContext = React.createContext(null);

export const useProvideUsersContext = () => {
  const [users, setUsers] = React.useState([]);

  return {
    users,
    setUsers,
  };
};

export const useUsersState = () => React.useContext(UsersContext);
