import * as React from 'react';
import { MouseEvent, ChangeEvent } from 'react';
import { SortingCategories } from '../state/SortingCategories';
import { useUsersState } from '../state/users.state';

const FilterBar = () => {
  const { filterUsers, sortByCity } = useUsersState();
  return (
    <div className="filter-bar">
      <div className="search">
        <h2>Search By:</h2>
        <input
          id="search"
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            filterUsers(e.target.value)
          }
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="sort">
        <h2>Sort By:</h2>
        <div className="buttons-container">
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              sortByCity(e, SortingCategories.FIRST)
            }
          >
            First
          </button>
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              sortByCity(e, SortingCategories.LAST)
            }
          >
            Last
          </button>
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              sortByCity(e, SortingCategories.EMAIL)
            }
          >
            Email
          </button>
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              sortByCity(e, SortingCategories.CITY)
            }
          >
            City
          </button>
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              sortByCity(e, SortingCategories.STATE)
            }
          >
            State
          </button>
          <button
            onClick={(e: MouseEvent<HTMLButtonElement>) =>
              sortByCity(e, SortingCategories.COUNTRY)
            }
          >
            Country
          </button>
        </div>
      </div>
      <div />
    </div>
  );
};

export default FilterBar;
