import React from 'react';
import Style from './level.module.css';

const LevelThreeDiv = ({ data }) => {
  return (
    <div className={Style.LevelThreeDivContainer}>
      <div className={Style.nameAndLogoThree}>
        <img src={data.icon} alt='icon' />
        <p>{data.name}</p>
      </div>
      <div className={Style.totalCountingThree}>
        <div className={Style.BigValue}>
          <p>{data.bottomContaint?.value}</p>
        </div>
        <div className={Style.unit}>
          <p>{data.bottomContaint?.rightTop}</p>
          <p>{data.bottomContaint?.rightDown}</p>
        </div>
      </div>
      <div className={Style.ThirdBox}>
        {data.thirdBox ? ( // Check if data.thirdBox is defined
          data.thirdBox.map((elem, i) => (
            <div key={i} className={Style.ThirdBoxContent}>
              <div className={Style.ThirdBoxValue}>
                {elem.value}
              </div>
              <div className={Style.ThirdBoxUnit}>
                {elem.unit}
              </div>
            </div>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default LevelThreeDiv;
