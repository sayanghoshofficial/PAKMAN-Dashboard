import React, { useState } from 'react';
import Style from './dynamicbox.module.css';
import InnerHeader from './InnerHeader/InnerHeader';

const DynamicElement = () => {
    const divArr = [1, 2, 3, 4, 5, 6];
    const [classes, setClasses] = useState({
        0: Style.levelOne,
        1: Style.levelTwo,
        2: Style.levelThree,
        3: Style.levelThree,
        4: Style.levelThree,
        5: Style.levelThree,
    });

    const handleClick = (index) => {
        if (index === 1) {
            setClasses({
                0: Style.levelOne,
                1: Style.levelTwo,
                2: Style.levelThree,
                3: Style.levelThree,
                4: Style.levelThree,
                5: Style.levelThree,
            })
        } else if (index === 2) {
            setClasses({
                0: Style.levelTwo,
                1: Style.levelOne,
                2: Style.levelThree,
                3: Style.levelThree,
                4: Style.levelThree,
                5: Style.levelThree,
            })
        } else if (index === 3) {
            setClasses({
                0: Style.levelThree,
                1: Style.levelThree,
                2: Style.levelOne,
                3: Style.levelTwo,
                4: Style.levelThree,
                5: Style.levelThree,
            })
        } else if (index === 4) {
            setClasses({
                0: Style.levelThree,
                1: Style.levelThree,
                2: Style.levelTwo,
                3: Style.levelOne,
                4: Style.levelThree,
                5: Style.levelThree,
            })
        } else if (index === 5) {
            setClasses({
                0: Style.levelThree,
                1: Style.levelThree,
                2: Style.levelThree,
                3: Style.levelThree,
                4: Style.levelOne,
                5: Style.levelTwo,
            })
        } else if (index === 6) {
            setClasses({
                0: Style.levelThree,
                1: Style.levelThree,
                2: Style.levelThree,
                3: Style.levelThree,
                4: Style.levelTwo,
                5: Style.levelOne,
            })
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
