import React, { useEffect, useState } from 'react';
import Style from './dynamicbox.module.css';
import InnerHeader from './InnerHeader/InnerHeader';
import { DynamicElementClassData } from '../../Data';
import { LevelOneDiv, LevelTwoDiv, LevelThreeDiv } from './LevelWiseDiv';
import { Loader } from 'rsuite';

const DynamicElement = ({ toggleDropDown, appValue, resetAppValue }) => {
    const [classes, setClasses] = useState(DynamicElementClassData[0]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/dynamicelement');
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

    const handleClick = (index) => {
        if (index) {
            setClasses(DynamicElementClassData[index - 1])
        }
    };
    // Define a function for mapping class names to components
    const mapClassesToComponents = (c, data) => {
        if (c === Style.levelOne) {
            return <LevelOneDiv
                data={data}
            />;
        } else if (c === Style.levelTwo) {
            return <LevelTwoDiv
                data={data}
            />;
        } else {
            return <LevelThreeDiv
                data={data}
            />;
        }
    };

    return (
        <div className={Style.DynamicElementContainer}>
            <InnerHeader toggleDropDown={toggleDropDown} appValue={appValue} resetAppValue={resetAppValue} />
            {loading ?
                <Loader content="Loading..." vertical/>
                :
                <div className={Style.DynamicElementWrapper}>
                    {data.map((ele, i) => (
                        <div
                            key={ele.id}
                            className={classes[ele.id - 1]}
                            onClick={() => handleClick(ele.id)}
                        >
                            {mapClassesToComponents(classes[i], ele)}
                        </div>
                    ))}
                </div>
            }

        </div>
    );
};

export default DynamicElement;
