import React from 'react';
import Style from './Compliance.module.css';
import useAnimatedValue from '../../../../../customState/useAnimatedValue';

const ComplianceInner = ({ elem }) => {
    const animatedValue = useAnimatedValue(0, elem.value || 0);

    // Format the number with commas for display
    const formattedValue = (value) => value.toLocaleString();

    return (
        <div className={Style.ComplianceInner}>
            <h3>{formattedValue(animatedValue)}{elem?.percentSign && <span>{elem.percentSign}</span>}</h3>
            <p>{elem.purpose}</p>
        </div>
    );
};

export default ComplianceInner;
