import React from 'react';
import Style from './utilization.module.css';

const UtilizationSemiCircle = ({ value }) => {
  return (
    <div className={Style.outerDiv}>
      <div className={Style.semiCircle} style={{ '--percentage': value }}>
        <div className={Style.minuteHand}></div>
      </div>
    </div>
  )
}

export default UtilizationSemiCircle;
