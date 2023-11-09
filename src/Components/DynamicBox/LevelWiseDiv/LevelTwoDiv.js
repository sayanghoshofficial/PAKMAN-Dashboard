import React from 'react';
import Style from './level.module.css';

const LevelTwoDiv = ({ data }) => {
  return (
    <div className={Style.LevelTwoDivContainer}>
      <div className={Style.nameAndLogoTwo}>
        <img src={data.icon} alt='icon' />
        <p>{data.name}</p>
      </div>
      <div className={Style.totalCountingTwo}>
        <div className={Style.BigValue}>
          <p>{data.bottomContaint?.value}</p>
        </div>
        <div className={Style.unit}>
          <p>{data.bottomContaint?.rightTop}</p>
          <p>{data.bottomContaint?.rightDown}</p>
        </div>
      </div>
    </div>
  )
}

export default LevelTwoDiv
