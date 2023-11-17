import React from 'react';
import Style from '../level.module.css';
import formatNumber from './formatNumber';
import useAnimatedValue from '../../../../customState/useAnimatedValue';

const BottomExtraForThird = ({ data }) => {
    const animatedValue = useAnimatedValue(0, data.bottomExtra?.value || 0);
    return (
        <div className={Style.bottomExtraForThirdLevel}>
            <div className={Style.BigValueAnother}>
                <p>{formatNumber(animatedValue)}</p>
            </div>
            <div className={Style.unitAnother}>
                <p>{data.bottomExtra?.anothervalue}</p>
            </div>
        </div>
    )
}

export default BottomExtraForThird;
