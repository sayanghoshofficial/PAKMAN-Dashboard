import React, { useEffect, useState } from 'react';
import Style from './Compliance.module.css';
import ComplianceGraphUsingD3 from './ComplianceGraphUsingD3';
import { Loader } from 'rsuite';
import { apiUrl } from '../../../../../Constant';

const ComplianceGraphBox = ({ graphData, others }) => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}compliance`);
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


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 500);

    const handleResize = () => {
      // Reload ComplianceGraphUsingD3 on window resize
      setLoaded(false);
      clearTimeout(timer);

      const reloadTimer = setTimeout(() => {
        setLoaded(true);
      }, 1);

      return () => clearTimeout(reloadTimer); // Clear the timer if the component is unmounted
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  if (loading) {
    return <Loader content="Loading..." vertical />
  }

  return (
    <div className={Style.ComplianceGraphBoxWapper}>
      {loaded && (
        <ComplianceGraphUsingD3 data={data} others={others} />
      )}
    </div>
  );
};

export default ComplianceGraphBox;



// <div className={Style.elementDetails}>
//         {graphData.map((elem, idx) => (
//           <div className={Style.element} key={idx}>
//             <p>{elem.name}</p>
//             <p>{elem.value}%</p>
//           </div>
//         ))}


//         <div className={Style.Mainelement}>
//           <p>All Apps</p>
//           <h2>{others.value}</h2><span>{others.endUnit}</span>
//         </div>
//       </div>
//       <div className={Style.graphVisual}>
//         <div className={Style.graph}>
//           <SemiCircles index={0} data={graphData} />
//         </div>
//       </div>