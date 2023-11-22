import React, { useState, useEffect } from 'react';
import Style from './moniteringData.module.css';
import BoxElem from './BoxElem';
import { Loader } from 'rsuite';

const MoniteringDataVisulition = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/monitoring');
        const data = await response.json();
        // console.log('Raw Data:', data);
        const sortedData = data.sort((a, b) => a.id - b.id);
        // console.log('Sorted Data', sortedData);
        setData(sortedData);

        setLoading(false); // Set loading to false when data is fetched
      } catch (err) {
        console.error('Error fetching dropdown data:', err);
        setLoading(false); // Set loading to false in case of an error
      }
    };
    fetchData();
  }, []);


  const colorDiv = (val) => {
    if (val > 80) {
      return 'RGB(238,0,0)';
    } else if (val > 70) {
      return 'RGB(234,197,1)';
    } else {
      return 'RGB(112,197,48)';
    }
  };

  if(loading){
    return <Loader content="Loading..." vertical/>
  }

  return (
    <div className={Style.MoniteringDataVisulitionWapper}>
      {data.map((ele, idx) => (
        <div className={Style.BoxElemWapper} key={ele._id}>
          <BoxElem key={idx} color={colorDiv(ele.value)} />
        </div>

      ))}
    </div>
  );
};

export default MoniteringDataVisulition;
