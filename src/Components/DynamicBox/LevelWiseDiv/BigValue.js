import React  from 'react';
import Style from './level.module.css';
import useAnimatedValue from '../../../customState/useAnimatedValue';

const BigValue = ({ elem }) => {
    const animatedValue = useAnimatedValue(0, elem?.value || 0);
    const formatNumber = (value) => {
        if (value < 100) {
            const formattedValue = value % 1 === 0 ? value.toFixed(0) : value.toFixed(2);
            return formattedValue.replace(/\.?0*$/, '');
        } else if (value < 1000) {
            return value.toString();
        } else if (value < 1000000) {
            return (value / 1000).toFixed(1) + 'K';
        } else {
            return (value / 1000000).toFixed(1) + 'M';
        }
    }

   

    return (
        <div className={Style.BigValue}>
            <p>
                <span>{elem?.startUnit}</span>
                {formatNumber(animatedValue)}
                <span style={{ fontWeight: elem?.endUnit === '%' ? '300' : 'normal' }}>
                    {elem?.endUnit}
                </span>
            </p>
        </div>
    );
}

export default BigValue
