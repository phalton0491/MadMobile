import * as React from 'react';
import Card from '../CardContainer/Card/Card';
import { useUsersState } from '../state/users.state';
import { User } from '../types/UserTypes';

const CardContainer = () => {
  const { displayedUserList, users } = useUsersState();
  React.useEffect(() => {
    console.log('users', displayedUserList);
  }, [displayedUserList]);
  return (
    <ul className="card-container">
      {(displayedUserList &&
        users &&
        displayedUserList.length &&
        users.length) > 0 ? (
        displayedUserList.map((user: User) => (
          <Card key={user.cell} user={user} />
        ))
      ) : !users.length ? (
        <p>Loading Users..</p>
      ) : !displayedUserList.length ? (
        <p>your search is no bueno ;)</p>
      ) : (
        <div>wait for it...</div>
      )}
    </ul>
  );
};

export default CardContainer;
