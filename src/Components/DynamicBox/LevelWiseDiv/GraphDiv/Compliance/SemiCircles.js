// SemiCircles.js
import React from 'react';
import Style from './Compliance.module.css';

const SemiCircles = ({ index, data }) => {
    if (index >= data.length) {
        return null;
    }

    const currentStyle = data[index];

    return (
        <div className={Style.semiCircle}
            style={{
                '--percentage': currentStyle.value,
                '--shadeColor1': currentStyle.color1,
                '--shadeColor2': currentStyle.color2,
                '--rotation': currentStyle.rotation
            }}>
            <SemiCircles index={index + 1} data={data} />
            
        </div>
    );
};

export default SemiCircles;
