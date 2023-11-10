import React from 'react';
import Style from '../level.module.css';

const ThirdBox = ({elem}) => {
    return (
        <div className={Style.ThirdBoxContent}>
            <div className={Style.ThirdBoxValue}>
                {elem.value}
                {
                    elem.sign
                    &&
                    <span className={Style.sign}>{elem.sign}</span>
                }
            </div>
            <div className={Style.ThirdBoxUnit}>
                {elem.unit}
            </div>
        </div>
    )
}

export default ThirdBox
