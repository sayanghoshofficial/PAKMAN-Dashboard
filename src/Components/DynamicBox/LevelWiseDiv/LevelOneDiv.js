import React from 'react';
import Style from './level.module.css';
import { BarWithLineGraph, LineGraphForInventory } from './GraphDiv';

const LevelOneDiv = ({ data }) => {
  const graphSpaceSelector = (graphData) => {
    if (data.name === 'COST') {
      return <BarWithLineGraph graphData={graphData} />
    } else if (data.name === 'INVENTORY') {
      return <LineGraphForInventory graphData={graphData} />
    }
    else {
      return null;
    }
  };

  return (
    <div className={Style.LevelOneDivWapper}>
      <div className={Style.LevelOneDivInner}>
        <div className={Style.nameAndLogo}>
          <img src={data.icon} alt='icon' />
          <p>{data.name}</p>
        </div>
        <div className={Style.GraphSpace}>
          {graphSpaceSelector(data.graphData)}
        </div>
        <div className={Style.totalCounting}>
          <div className={Style.BigValue}>
            <p>{data.bottomContaint?.value}</p>
          </div>
          <div className={Style.unit}>
            <p>{data.bottomContaint?.rightTop}</p>
            <p>{data.bottomContaint?.rightDown}</p>
          </div>
        </div>
        {
          data.bottomExtra &&
          <div className={Style.bottomExtra}>
            <div className={Style.BigValueAnother}>
              <p>{data.bottomExtra.value}</p>
            </div>
            <div className={Style.unitAnother}>
              <p>{data.bottomExtra.anotherValue}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
};

export default LevelOneDiv;
