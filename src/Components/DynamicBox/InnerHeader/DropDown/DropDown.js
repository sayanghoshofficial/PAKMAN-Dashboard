import React, { useState } from 'react';
import Style from './Dropdown.module.css';
import SearchBox from './SearchBox';
import AllApplication from './AllApplication';
import { DropDownData } from '../../../../Data';

const DropDown = ({ toggleDropDown, getApp }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  // Filter the data based on the search input
  const filteredData = DropDownData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={Style.DropDownWapper} onClick={toggleDropDown}>
      <div className={Style.DropDownBox} onClick={handleInnerDivClick}>
        <SearchBox onChange={handleSearchInputChange} />
        <AllApplication getApp={getApp} DropDownData={filteredData} />
      </div>
    </div>
  );
};

export default DropDown;
