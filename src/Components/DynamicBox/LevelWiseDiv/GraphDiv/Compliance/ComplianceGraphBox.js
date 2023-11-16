// ComplianceGraphBox.js
import React from 'react';
import Style from './Compliance.module.css';
import SemiCircles from './SemiCircles';

const ComplianceGraphBox = ({ graphData, others }) => {


  return (
    <div className={Style.ComplianceGraphBoxWapper}>
      <div className={Style.elementDetails}>
        {graphData.map((elem, idx) => (
          <div className={Style.element} key={idx}>
            <p>{elem.name}</p>
            <p>{elem.value}%</p>
          </div>
        ))}


        <div className={Style.Mainelement}>
          <p>All Apps</p>
          <h2>{others.value}</h2><span>{others.endUnit}</span>
        </div>
      </div>
      <div className={Style.graphVisual}>
        <div className={Style.graph}>
          <SemiCircles index={0} data={graphData} />
        </div>
      </div>
    </div>
  );
};

export default ComplianceGraphBox;
