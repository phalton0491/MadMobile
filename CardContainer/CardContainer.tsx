import * as React from 'react';
import Card from '../CardContainer/Card/Card';
import { useUsersState } from '../state/users.state';
import { User } from '../types/UserTypes';

const CardContainer = () => {
  const { users } = useUsersState();
  React.useEffect(() => {
    console.log('users', users);
  });
  return (
    <div className="cardContainer">
      {(users && users.length) > 0 ? (
        users.map((user: User) => <Card key={user.cell} user={user} />)
      ) : (
        <div>No Users Found</div>
      )}
    </div>
  );
};

export default CardContainer;
