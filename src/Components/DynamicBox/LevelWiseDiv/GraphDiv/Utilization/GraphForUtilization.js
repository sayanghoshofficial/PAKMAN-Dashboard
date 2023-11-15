import React from 'react';
import Style from './utilization.module.css';
import FirstGraph from './FirstGraph';
import SecondGraph from './SecondGraph';
import ThirdGraph from './ThirdGraph';

const GraphForUtilization = ({ graphData }) => {
  return (
    <div className={Style.GraphForUtilizationWapper}>
      {graphData.map((data, index) => (
        <div key={index} className={Style.GraphBox}>
          {index === 0 && <FirstGraph graphData={data} />}
          {index === 1 && <SecondGraph graphData={data} />}
          {index === 2 && <ThirdGraph graphData={data} />}
        </div>
      ))}
    </div>
  );
};

export default GraphForUtilization;
