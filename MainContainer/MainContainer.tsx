import * as React from 'react';
import CardContainer from '../CardContainer/CardContainer';
import FilterBar from '../FilterBar/FilterBar';
import { getUsers } from '../api/cardsApi';
import { useUsersState } from '../state/users.state';
import { UserInfo } from '../types/UserInfo';

const MainContainer = () => {
  const { setUsers } = useUsersState();
  React.useEffect(() => {
    getUsers().then((users: UserInfo) => setUsers(users.results));
  }, []);
  return (
    <div className="mainContainer">
      <FilterBar />
      <CardContainer />
    </div>
  );
};

export default MainContainer;
