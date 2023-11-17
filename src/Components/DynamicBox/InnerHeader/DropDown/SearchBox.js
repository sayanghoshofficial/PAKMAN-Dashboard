import React from 'react';
import Style from './Dropdown.module.css';
import SearchIcon from '../../../../Assets/IconImage/magnifying-glass.png';

const SearchBox = ({ onChange }) => {
  return (
    <div className={Style.SearchBoxWapper}>
      <img src={SearchIcon} alt='search-icon' />
      <input
        type='text'
        placeholder='SEARCH'
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBox;
