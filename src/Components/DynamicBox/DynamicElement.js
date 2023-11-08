import React, { useState } from 'react';
import Style from './dynamicbox.module.css';
import InnerHeader from './InnerHeader/InnerHeader';
import { DynamicElementClassData } from '../../Data';

const DynamicElement = () => {
    const divArr = [1, 2, 3, 4, 5, 6];
    const [classes, setClasses] = useState(DynamicElementClassData[0]);

    const handleClick = (index) => {
        if (index === 1) {
            setClasses(DynamicElementClassData[0])
        } else if (index === 2) {
            setClasses(DynamicElementClassData[1])
        } else if (index === 3) {
            setClasses(DynamicElementClassData[2])
        } else if (index === 4) {
            setClasses(DynamicElementClassData[3])
        } else if (index === 5) {
            setClasses(DynamicElementClassData[4])
        } else if (index === 6) {
            setClasses(DynamicElementClassData[5])
        }
    };

    return (
        <div className={Style.DynamicElementContainer}>
            <InnerHeader />
            <div className={Style.DynamicElementWrapper}>
                {divArr.map((index) => (
                    <div
                        key={index}
                        className={classes[index - 1]}
                        onClick={() => handleClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default DynamicElement;
