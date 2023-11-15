import React from 'react';
import Style from './utilization.module.css';

const UtilizationSemiCircle = ({ elem }) => {
  return (
    <div className={Style.outerDiv}>
      <div 
      className={Style.semiCircle} 
      style={{ '--percentage': elem?.value }} 
      title={`${elem?.unit} - ${elem?.value} %`}
      >
      <div className={Style.minuteHand}></div>
      </div>
    </div>
  );
}

export default UtilizationSemiCircle;
