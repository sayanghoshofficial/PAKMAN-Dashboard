import React, { useEffect, useState } from 'react';
import Style from './Compliance.module.css';
import ComplianceGraphUsingD3 from './ComplianceGraphUsingD3';

const ComplianceGraphBox = ({ graphData, others }) => {
  const [loaded, setLoaded] = useState(false);

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
      }, 500);

      return () => clearTimeout(reloadTimer); // Clear the timer if the component is unmounted
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  return (
    <div className={Style.ComplianceGraphBoxWapper}>
      {loaded && (
        <ComplianceGraphUsingD3 data={graphData} others={others} />
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