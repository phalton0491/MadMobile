import * as React from 'react';
import { User } from '../../types/UserTypes';

interface UserProps {
  user: User;
}

const Card: React.FC<UserProps> = ({ user }) => {
  return (
    <li className="card">
      <div className="avatar-container">
        <img src={user.picture.medium} />
        <p>{user.name.first}</p>
      </div>
      <div className="user-info-container">
        <div className="contact-into">
          <p>
            <b>Name:</b> {user.name.first}&nbsp;{user.name.last}
          </p>
          <p>
            <b>Email:</b>&nbsp;{user.email}
          </p>
          <p>
            <b>Phone:</b>&nbsp;{user.phone}
          </p>
        </div>
        <div className="location">
          <p>
            <b>City:</b> {user.location.city}
          </p>
          <p>
            <b>State:</b> {user.location.state}
          </p>
          <p>
            <b>Country:</b> {user.location.country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default Card;
