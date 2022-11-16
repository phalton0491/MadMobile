import * as React from 'react';
import { MouseEvent } from 'react';
import { User } from '../types/UserTypes';

export const UsersContext = React.createContext(null);

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

  const sortByCity = (e: MouseEvent) => {
    e.preventDefault();
    const filteredSortedUsers = [];
    const sortedUsers = users.sort((a: User, b: User) => {
      return a.location.city.localeCompare(b.location.city);
    });
    console.log('sortedUsers', sortedUsers);
    setDisplayedUserList([...sortedUsers]);
  };

  const filterUsers = (keyword: string) => {
    setDisplayedUserList(users);
    const filteredUsers = users.filter((user: User) => {
      if (isSearchingByNumber(keyword)) return user.phone.includes(keyword);
      return isSearchingByNameString(user, keyword.toLocaleLowerCase());
    });
    setDisplayedUserList([...filteredUsers]);
  };

  return {
    users,
    displayedUserList,
    setUsers,
    setDisplayedUserList,
    filterUsers,
    sortByCity,
  };
};

export const useUsersState = () => React.useContext(UsersContext);
