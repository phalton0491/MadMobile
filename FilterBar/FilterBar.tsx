import * as React from 'react';
import { useUsersState } from '../state/users.state';

const FilterBar = () => {
  const { filterUsers } = useUsersState();
  return (
    <div className="filter-bar">
      <input
        onChange={(e) => filterUsers(e.target.value)}
        type="text"
        placeholder="Search..."
      />
      <div />
      <div />
    </div>
  );
};

export default FilterBar;
