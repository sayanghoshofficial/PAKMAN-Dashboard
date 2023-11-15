import React from 'react';
import Style from '../level.module.css';
import UtilizationSemiCircle from '../GraphDiv/Utilization/UtilizationSemiCircle';

const ThirdBox = ({ elem, name }) => {

    return (
        <div className={Style.ThirdBoxContent}>
            <div className={Style.ThirdBoxValue}>
                {name === 'UTILIZATION' ? <UtilizationSemiCircle elem={elem}/> : elem.value}
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
