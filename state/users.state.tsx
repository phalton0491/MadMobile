import * as React from 'react';
import { User } from '../types/UserTypes';

interface UsersState {
  users: User[];
  displayedUserList: User[];
  setUsers: () => User[];
  setDisplayedUserList: () => User[];
  filterUsers: () => void;
}

export const UsersContext = React.createContext<UsersState | null>(null);

export const useProvideUsersContext = () => {
  const [users, setUsers] = React.useState([]);
  const [displayedUserList, setDisplayedUserList] = React.useState([]);

  const isSearchingByNameString = (user: User, keyword: string): Boolean => {
    return (
      user.name.first.toLocaleLowerCase().includes(keyword) ||
      user.name.last.toLocaleLowerCase().includes(keyword) ||
      user.email.toLocaleLowerCase().includes(keyword) ||
      user.location.city.toLocaleLowerCase().includes(keyword) ||
      user.location.state.toLocaleLowerCase().includes(keyword) ||
      user.location.country.toLocaleLowerCase().includes(keyword)
    );
  };

  const isSearchingByNumber = (keyword: string): Boolean => {
    return /\d/.test(keyword);
  };

  const filterUsers = (keyword: string): void => {
    const filteredUsers = users.filter((user: User) => {
      if (isSearchingByNumber(keyword)) return user.phone.includes(keyword);
      return isSearchingByNameString(user, keyword.toLocaleLowerCase());
    });
    setDisplayedUserList(filteredUsers);
  };

  return {
    users,
    displayedUserList,
    setUsers,
    setDisplayedUserList,
    filterUsers,
  };
};

export const useUsersState = () => React.useContext(UsersContext);
