import React from 'react';
import Style from './level.module.css';
import BottomExtraForTwo from './ExtraElements/BottomExtraForTwo';
import BigValue from './BigValue';

const LevelTwoDiv = ({ data }) => {
  return (
    <div className={Style.LevelTwoDivContainer}>
      <div className={Style.nameAndLogoTwo}>
        <img src={data.icon} alt='icon' />
        <p>{data.name}</p>
      </div>
      <div className={Style.totalCountingTwo}>
        {data.bottomExtra &&
          <BottomExtraForTwo data={data} />
        }
        <BigValue elem={data.bottomContaint} />

        <div className={Style.unit}>
          <p>{data.bottomContaint?.rightTop}</p>
          <p>{data.bottomContaint?.rightDown}</p>
        </div>
      </div>
    </div>
  )
}

export default LevelTwoDiv;
