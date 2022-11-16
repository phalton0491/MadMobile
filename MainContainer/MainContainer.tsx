import * as React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import FilterBar from '../FilterBar/FilterBar';
import { getUsers } from '../api/cardsApi';
import { useUsersState } from '../state/users.state';
import { UserInfo } from '../types/UserInfo';

const MainContainer = () => {
  const { setUsers, setDisplayedUserList } = useUsersState();
  React.useEffect(() => {
    getUsers().then((users: UserInfo) => {
      setUsers(users.results);
      setDisplayedUserList(users.results);
    });
  }, []);
  return (
    <div className="main-container">
      <FilterBar />
      <CardContainer />
    </div>
  );
};

export default MainContainer;
