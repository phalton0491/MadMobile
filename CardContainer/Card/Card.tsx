import * as React from 'react';
import { User } from '../../types/UserTypes';

interface UserProps {
  user: User;
}

const Card: React.FC<UserProps> = ({ user }) => {
  return <div className="card">{user.name.first}</div>;
};

export default Card;
