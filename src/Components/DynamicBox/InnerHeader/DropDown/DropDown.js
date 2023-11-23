import React, { useEffect, useState } from 'react';
import Style from './Dropdown.module.css';
import SearchBox from './SearchBox';
import AllApplication from './AllApplication';
import { Loader } from 'rsuite';
import { apiUrl } from '../../../../Constant';

const DropDown = ({ toggleDropDown, getApp }) => {
  const [searchInput, setSearchInput] = useState('');
  const [dropdownData, setDropdownData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleInnerDivClick = (e) => {
    e.stopPropagation();
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}dropdown`);
        const data = await response.json();
        setDropdownData(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.error('Error fetching dropdown data:', err);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);

  // Filter the data based on the search input
  const filteredData = dropdownData.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );



  return (
    <div className={Style.DropDownWapper} onClick={toggleDropDown}>
      <div className={Style.DropDownBox} onClick={handleInnerDivClick}>
        <SearchBox onChange={handleSearchInputChange} />
        {loading ? (
          <Loader content="Loading..." vertical />
        ) : (
          <AllApplication getApp={getApp} DropDownData={filteredData} />
        )}
      </div>
    </div>
  );
};

export default DropDown;
