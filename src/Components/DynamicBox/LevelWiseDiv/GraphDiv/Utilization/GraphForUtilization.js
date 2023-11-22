import React, { useEffect, useState } from 'react';
import Style from './utilization.module.css';
import FirstGraph from './FirstGraph';
import SecondGraph from './SecondGraph';
import ThirdGraph from './ThirdGraph';
import { Loader } from 'rsuite';

const GraphForUtilization = ({ graphData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/utilization');
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

  if(loading){
    return <Loader content="Loading..." vertical/>
  }

  return (
    <div className={Style.GraphForUtilizationWapper}>
      {data.map((data, index) => (
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
