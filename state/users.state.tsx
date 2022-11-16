import * as React from 'react';
import { MouseEvent, SetStateAction } from 'react';
import { User } from '../types/UserTypes';
import { SortingCategories } from './SortingCategories';

interface UsersInitialState {
  users: User[];
  displayedUserList: User[];
  setUsers: React.Dispatch<SetStateAction<User[]>>;
  setDisplayedUserList: React.Dispatch<SetStateAction<User[]>>;
  filterUsers: (string) => void;
  sortByCity: (e: MouseEvent, category: string) => void;
  editUser: (
    e: React.FormEvent,
    first: string,
    last: string,
    email: string,
    city: string,
    state: string,
    country: string,
    phone: string,
    userId: string
  ) => void;
}

export const UsersContext = React.createContext<UsersInitialState>(null);

export const useProvideUsersContext = () => {
  const [users, setUsers] = React.useState<User[]>([]);
  const [displayedUserList, setDisplayedUserList] = React.useState<User[]>([]);

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

  const editUser = (
    e: React.FormEvent,
    first: string,
    last: string,
    email: string,
    city: string,
    state: string,
    country: string,
    phone: string,
    userId: string
  ) => {
    e.preventDefault();
    let usersCopy = [...users];
    const findUserToEdit = usersCopy.find(
      (user: User) => user.id.name === userId
    );
    const indexOfUserToEdit = usersCopy.indexOf(findUserToEdit);
    usersCopy[indexOfUserToEdit] = {
      ...findUserToEdit,
      name: {
        first,
        last,
        title: findUserToEdit.name.title,
      },
      email,
      phone,
      location: {
        city,
        coordinates: findUserToEdit.location.coordinates,
        country,
        postcode: findUserToEdit.location.postcode,
        state,
        street: findUserToEdit.location.street,
        timezone: findUserToEdit.location.timezone,
      },
    };
    setUsers([...usersCopy]);
    setDisplayedUserList([...usersCopy]);
  };

  return {
    users,
    displayedUserList,
    setUsers,
    setDisplayedUserList,
    filterUsers,
    sortByCity,
    editUser,
  };
};

export const useUsersState = () => React.useContext(UsersContext);
