import React, { useEffect, useState } from 'react';
import Style from '../graph.module.css';
import WapperDivForStorage from './WapperDivForStorage';
import { Loader } from 'rsuite';

const GraphForStorage = ({ graphData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/storage');
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
    <div className={Style.GraphForStorageWapper}>
      {data.map((ele, idx) => (
        <WapperDivForStorage ele={ele} key={idx} />
      ))}
    </div>
  );
}

export default GraphForStorage;
