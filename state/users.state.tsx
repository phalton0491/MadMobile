import * as React from 'react';
import { MouseEvent } from 'react';
import { User } from '../types/UserTypes';
import { SortingCategories } from './SortingCategories';

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

  const sortByCity = (e: MouseEvent, category: string) => {
    e.preventDefault();
    const filteredSortedUsers = [];

    switch (category) {
      case SortingCategories.FIRST:
      case SortingCategories.LAST:
      case SortingCategories.EMAIL:
      case SortingCategories.CITY:
      case SortingCategories.STATE:
      case SortingCategories.COUNTRY:
      default:
        setDisplayedUserList([...users]);
    }

    const sortedUsers = users.sort((a: User, b: User) => {
      switch (category) {
        case SortingCategories.FIRST:
          return a.name.first.localeCompare(b.name.first);
        case SortingCategories.LAST:
          return a.name.last.localeCompare(b.name.last);
        case SortingCategories.EMAIL:
          return a.email.localeCompare(b.email);
        case SortingCategories.CITY:
          return a.location.city.localeCompare(b.location.city);
        case SortingCategories.STATE:
          return a.location.state.localeCompare(b.location.state);
        case SortingCategories.COUNTRY:
          return a.location.country.localeCompare(b.location.country);
        default:
          setDisplayedUserList([...users]);
      }
    });
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
