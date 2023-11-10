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
        {data.bottomExtra &&
          <div className={Style.bottomExtraForLevelTwo}>
            <div className={Style.BigValueAnother}>
              <p>{data.bottomExtra.value}</p>
            </div>
            <div className={Style.unitAnother}>
              <p>{data.bottomExtra.anotherValue}</p>
            </div>
          </div>
        }
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
