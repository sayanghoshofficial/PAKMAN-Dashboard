import React from 'react';
import Style from './graph.module.css';
import WapperDivForStorage from './Storage/WapperDivForStorage';

const GraphForStorage = ({ graphData }) => {

  

  return (
    <div className={Style.GraphForStorageWapper}>
      {graphData.map((ele, idx) => (
        <WapperDivForStorage ele={ele} key={idx}/>
      ))}
    </div>
  );
}

export default GraphForStorage;
