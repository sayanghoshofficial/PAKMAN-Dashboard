import React from 'react';
import Style from './level.module.css';
import {
  BarWithLineGraph,
  GraphForStorage,
  GraphForUtilization,
  LineGraphForInventory,
  MoniteringDataVisulition,
  ComplianceBottomDivForLevelOne,
  ComplianceGraphBox
} from './GraphDiv';
import { BottomExtra, TotalCounting } from './ExtraElements';

const LevelOneDiv = ({ data }) => {

  const graphSpaceSelector = (graphData) => {
    if (data.name === 'COST') {
      return <BarWithLineGraph />
    } else if (data.name === 'INVENTORY') {
      return <LineGraphForInventory />
    } else if (data.name === 'MONITORING') {
      return <MoniteringDataVisulition />
    } else if (data.name === 'UTILIZATION') {
      return <GraphForUtilization />
    } else if (data.name === 'STORAGE') {
      return <GraphForStorage />
    } else if (data.name === 'COMPLIANCE') {
      return <ComplianceGraphBox others={data.bottomContaint}/>
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
        {data.name === 'COMPLIANCE' ?
          <ComplianceBottomDivForLevelOne data={data} />
          :
          <TotalCounting data={data} />
        }

        {
          data.bottomExtra &&
          <BottomExtra data={data} />
        }
      </div>
    </div>
  );
};

export default LevelOneDiv;
