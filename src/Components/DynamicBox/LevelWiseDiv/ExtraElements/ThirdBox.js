import React from 'react';
import Style from '../level.module.css';
import UtilizationSemiCircle from '../GraphDiv/Utilization/UtilizationSemiCircle';
import formatNumber from './formatNumber';
import useAnimatedValue from '../../../../customState/useAnimatedValue';

const ThirdBox = ({ elem, name }) => {
    const animatedValue = useAnimatedValue(0, elem.value || 0)

    return (
        <div className={Style.ThirdBoxContent}>
            <div className={Style.ThirdBoxValue}>
                {elem?.startUnit && <span>{elem.startUnit}</span>}
                {name === 'UTILIZATION' ? <UtilizationSemiCircle elem={elem} /> : formatNumber(animatedValue)}
                {name === 'COST' && <span>0</span>}
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
