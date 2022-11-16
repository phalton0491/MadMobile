import * as React from 'react';
import Card from '../CardContainer/Card/Card';
import { useUsersState } from '../state/users.state';
import { User } from '../types/UserTypes';

const CardContainer = () => {
  const { displayedUserList } = useUsersState();
  React.useEffect(() => {
    console.log('users', displayedUserList);
  });
  return (
    <ul className="card-container">
      {(displayedUserList && displayedUserList.length) > 0 ? (
        displayedUserList.map((user: User) => (
          <Card key={user.cell} user={user} />
        ))
      ) : (
        <div>No Users Found</div>
      )}
    </ul>
  );
};

export default CardContainer;
