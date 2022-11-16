import * as React from 'react';
import EditCard from '../../CardContainer/Card/EditCard/EditCard';
import { User } from '../../types/UserTypes';

interface UserProps {
  user: User;
}

const ButtonTextCategories = {
  EDIT: 'Edit Profile',
  CANCEL: 'Cancel',
};

const Card: React.FC<UserProps> = ({ user }) => {
  const [showEditCard, setShowEditCard] = React.useState<boolean>(false);

  return (
    <li className="card">
      <h2>{user.name.first}</h2>
      <div className="avatar-container">
        <img src={user.picture.medium} />
        <div className="edit-btn">
          <button onClick={() => setShowEditCard((prev) => !prev)}>
            {showEditCard
              ? ButtonTextCategories.CANCEL
              : ButtonTextCategories.EDIT}
          </button>
        </div>
      </div>

      {showEditCard ? (
        <EditCard user={user} setShowEditCard={setShowEditCard} />
      ) : (
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
      )}
    </li>
  );
};

export default Card;
