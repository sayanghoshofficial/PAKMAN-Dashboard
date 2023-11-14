import React from 'react';
import Style from './moniteringData.module.css';
import BoxElem from './BoxElem';

const MoniteringDataVisulition = ({ graphData }) => {
  const colorDiv = (val) => {
    if (val > 80) {
      return 'RGB(238,0,0)';
    } else if (val > 70) {
      return 'RGB(234,197,1)';
    } else {
      return 'RGB(112,197,48)';
    }
  };

  return (
    <div className={Style.MoniteringDataVisulitionWapper}>
      {graphData.map((ele, idx) => (
        <div className={Style.BoxElemWapper}>
          <BoxElem key={idx} color={colorDiv(ele.value)} />
        </div>

      ))}
    </div>
  );
};

export default MoniteringDataVisulition;
