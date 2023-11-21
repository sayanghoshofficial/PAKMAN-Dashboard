import React, { useEffect, useState } from 'react';
import Style from './innerHeader.module.css';
import fillterIcon from '../../../Assets/IconImage/filter-filled-tool-symbol.png';
import chevronRightIcon from '../../../Assets/IconImage/right-chevron.png';
import { Loader } from 'rsuite';

const InnerHeader = ({ toggleDropDown, appValue, resetAppValue }) => {
  const [innerHeaderDataValues, setInnerHeaderDataValues] = useState([]);
  const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/innerheaderdata');
        const data = await response.json();
        setInnerHeaderDataValues(data);
        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.error('Error fetching dropdown data:', err);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);


  return (
    <div className={Style.InnerHeader}>
      <div className={Style.fillterApplication}>
        <img src={fillterIcon} alt='filter_icon' onClick={toggleDropDown} />
        <p
          onClick={() => (appValue.length > 0 ? resetAppValue() : null)}
          style={appValue.length > 0 ? { cursor: 'pointer', color: '#ed0295' } : null}
        >
          ALL APPLICATIONS
        </p>
        {
          appValue.length > 0
          &&
          <>
            <img src={chevronRightIcon} alt='chevron-right' />
            <p>{appValue}</p>
          </>

        }

      </div>
      <div className={Style.ApplicationSecurity}>
        <div className={Style.ApplicationStatus}>
          <div className={Style.ApplicationStatusInnerDiv}>
            <p>APPLICATION STATUS:</p>
            {loading ?
              <Loader content="Loading..." vertical />
              :
              innerHeaderDataValues.map((value, idx) => (
                <p key={value._id}><b>{value.value}</b> {value.name}</p>
              ))

            }


          </div>
        </div>
        <div className={Style.Security}>
          <p>SECURITY</p>
          <div className={Style.greenDot}></div>
        </div>
      </div>
    </div >
  )
}

export default InnerHeader;