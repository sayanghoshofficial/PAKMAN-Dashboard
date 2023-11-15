import React from 'react';
import Style from '../level.module.css';
import formatNumber from './formatNumber';
import useAnimatedValue from '../../../../customState/useAnimatedValue';

const BottomExtraForTwo = ({data}) => {
    const animatedValue = useAnimatedValue(0,data.bottomExtra?.value || 0);
    return (
        <div className={Style.bottomExtraForLevelTwo}>
            <div className={Style.BigValueAnother}>
                <p>{formatNumber(animatedValue)}</p>
            </div>
            <div className={Style.unitAnother}>
                <p>{data.bottomExtra.anotherValue}</p>
            </div>
        </div>
    )
}

export default BottomExtraForTwo;
