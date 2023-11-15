import React from 'react';
import Style from '../level.module.css';
import useAnimatedValue from '../../../../customState/useAnimatedValue';
import formatNumber from './formatNumber';



// Component using the animation function
const BottomExtra = ({ data }) => {
    const animatedValue = useAnimatedValue(0, data.bottomExtra?.value || 0);

    return (
        <div className={Style.bottomExtra}>
            <div className={Style.BigValueAnother}>
                <p>{formatNumber(animatedValue)}</p>
            </div>
            <div className={Style.unitAnother}>
                <p>{data.bottomExtra?.anotherValue}</p>
            </div>
        </div>
    );
};

export default BottomExtra;
