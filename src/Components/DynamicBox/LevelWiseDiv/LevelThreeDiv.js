import React from 'react';
import Style from './level.module.css';
import ThirdBox from './ExtraElements/ThirdBox';
import BottomExtraForThird from './ExtraElements/BottomExtraForThird';

const LevelThreeDiv = ({ data }) => {
  return (
    <div className={Style.LevelThreeDivContainer}>
      <div className={Style.nameAndLogoThree}>
        <img src={data.icon} alt='icon' />
        <p>{data.name}</p>
      </div>
      <div className={Style.totalCountingThreeWapper}>
        <div className={Style.totalCountingThree}>
          <div className={Style.BigValue}>
            <p>{data.bottomContaint?.value}</p>
          </div>
          <div className={Style.unit}>
            <p>{data.bottomContaint?.rightTop}</p>
            <p>{data.bottomContaint?.rightDown}</p>
          </div>
        </div>
        {data.bottomExtra &&
         <BottomExtraForThird data={data}/>
        }
      </div>
      <div className={Style.ThirdBox}>
        {data.thirdBox ? (
          data.thirdBox.map((elem, i) => (
            <ThirdBox elem={elem} key={i} name={data.name}/>
          ))
        ) : null}
      </div>
    </div>
  );
};

export default LevelThreeDiv;
