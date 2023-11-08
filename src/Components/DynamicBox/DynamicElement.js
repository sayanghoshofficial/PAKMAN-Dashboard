import React, { useState } from 'react';
import Style from './dynamicbox.module.css';
import InnerHeader from './InnerHeader/InnerHeader';
import { DynamicElementClassData } from '../../Data';

const DynamicElement = () => {
    const divArr = [1, 2, 3, 4, 5, 6];
    const [classes, setClasses] = useState(DynamicElementClassData[0]);

    const handleClick = (index) => {
        if (index) {
            setClasses(DynamicElementClassData[index - 1])
        }else{
            return;
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
