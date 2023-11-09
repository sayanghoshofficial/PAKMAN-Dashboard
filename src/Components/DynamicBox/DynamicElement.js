import React, { useState } from 'react';
import Style from './dynamicbox.module.css';
import InnerHeader from './InnerHeader/InnerHeader';
import { DynamicElementClassData, DynamicElementGraphData } from '../../Data';
import { LevelOneDiv, LevelTwoDiv, LevelThreeDiv } from './LevelWiseDiv';

const DynamicElement = () => {
    const [classes, setClasses] = useState(DynamicElementClassData[0]);

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
            <InnerHeader />
            <div className={Style.DynamicElementWrapper}>
                {DynamicElementGraphData.map((data, i) => (
                    <div
                        key={data.id}
                        className={classes[data.id - 1]}
                        onClick={() => handleClick(data.id)}
                    >
                        {mapClassesToComponents(classes[i], data)}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DynamicElement;
