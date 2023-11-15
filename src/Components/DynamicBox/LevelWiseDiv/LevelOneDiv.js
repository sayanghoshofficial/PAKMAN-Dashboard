import React from 'react';
import Style from './level.module.css';
import {
  BarWithLineGraph,
  GraphForStorage,
  GraphForUtilization,
  LineGraphForInventory,
  MoniteringDataVisulition
} from './GraphDiv';
import { BottomExtra } from './ExtraElements';

const LevelOneDiv = ({ data }) => {

  const graphSpaceSelector = (graphData) => {
    if (data.name === 'COST') {
      return <BarWithLineGraph graphData={graphData} />
    } else if (data.name === 'INVENTORY') {
      return <LineGraphForInventory graphData={graphData} />
    } else if (data.name === 'MONITORING') {
      return <MoniteringDataVisulition graphData={graphData} />
    } else if (data.name === 'UTILIZATION') {
      return <GraphForUtilization graphData={graphData} />
    } else if (data.name === 'STORAGE') {
      return <GraphForStorage graphData={graphData} />
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
          <BottomExtra data={data} />
        }
      </div>
    </div>
  );
};

export default LevelOneDiv;
