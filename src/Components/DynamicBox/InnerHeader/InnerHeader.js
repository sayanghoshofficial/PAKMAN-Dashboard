import React from 'react';
import Style from './innerHeader.module.css';
import fillterIcon from '../../../Assets/IconImage/filter-filled-tool-symbol.png';

const InnerHeader = () => {
  return (
    <div className={Style.InnerHeader}>
      <div className={Style.fillterApplication}>
        <img src={fillterIcon} alt='filter_icon' />
        <p>ALL APPLICATIONS</p>
      </div>
      <div className={Style.ApplicationSecurity}>
        <div className={Style.ApplicationStatus}>
          <div className={Style.ApplicationStatusInnerDiv}>
            <p>APPLICATION STATUS:</p>
            <p><b>43</b> PRODUCTION</p>
            <p><b>7</b> BUILD</p>
            <p><b>5</b> INTAKE</p>
          </div>
        </div>
        <div className={Style.Security}>
          <p>SECURITY</p>
          <div className={Style.greenDot}></div>
        </div>
      </div>
    </div>
  )
}

export default InnerHeader;