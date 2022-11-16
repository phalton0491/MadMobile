import * as React from 'react';
import { ChangeEvent, SetStateAction } from 'react';
import { useUsersState } from '../../../state/users.state';
import { User } from '../../../types/UserTypes';

interface UserChildProps {
  user: User;
  setShowEditCard: React.Dispatch<SetStateAction<boolean>>;
}

const EditCard: React.FC<UserChildProps> = ({ user, setShowEditCard }) => {
  const { editUser } = useUsersState();
  const first = React.useRef(user.name.first);
  const last = React.useRef(user.name.last);
  const email = React.useRef(user.email);
  const city = React.useRef(user.location.city);
  const state = React.useRef(user.location.state);
  const country = React.useRef(user.location.country);
  const phone = React.useRef(user.phone);

  return (
    <div className="edit-card-form">
      <form
        onSubmit={(e: React.FormEvent) => {
          editUser(
            e,
            first.current,
            last.current,
            email.current,
            city.current,
            state.current,
            country.current,
            phone.current,
            user.id.name
          );
          setShowEditCard(false);
        }}
      >
        <div className="contact-into">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (first.current = e.target.value)
            }
            defaultValue={first.current}
            type="text"
            name="first"
          />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (last.current = e.target.value)
            }
            defaultValue={last.current}
            type="text"
            name="last"
          />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (email.current = e.target.value)
            }
            defaultValue={email.current}
            type="email"
            name="email"
          />
        </div>
        <div className="location">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (city.current = e.target.value)
            }
            defaultValue={city.current}
            type="text"
            name="city"
          />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (state.current = e.target.value)
            }
            defaultValue={state.current}
            type="text"
            name="state"
          />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (country.current = e.target.value)
            }
            defaultValue={country.current}
            type="text"
            name="country"
          />
        </div>
        <div className="submission">
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (phone.current = e.target.value)
            }
            defaultValue={phone.current}
            type="tel"
            name="phone"
          />
          <div />
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
