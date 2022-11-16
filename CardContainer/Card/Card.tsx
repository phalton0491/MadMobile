import * as React from 'react';
import EditCard from '../../CardContainer/Card/EditCard/EditCard';
import { User } from '../../types/UserTypes';

interface UserProps {
  user: User;
}

const ButtonTextCategories = {
  EDIT: 'Edit',
  CANCEL: 'Cancel',
};

const Card: React.FC<UserProps> = ({ user }) => {
  const [showEditCard, setShowEditCard] = React.useState<boolean>(false);

  return (
    <li className="card">
      <div className="avatar-container">
        <div className="edit-btn">
          <button onClick={() => setShowEditCard((prev) => !prev)}>
            {showEditCard
              ? ButtonTextCategories.CANCEL
              : ButtonTextCategories.EDIT}
          </button>
        </div>
        <img src={user.picture.medium} />
        <p>{user.name.first}</p>
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
