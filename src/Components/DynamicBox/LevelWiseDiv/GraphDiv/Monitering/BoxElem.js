import React from 'react';
import Style from './moniteringData.module.css';

const BoxElem = ({ color,value }) => {
    const colorForBoxVisulization = `${color.substring(0, color.length - 1)}, 0.3)`;
    const colorForInnerOneDiv =  `${color.substring(0, color.length - 1)}, 0.5)`;
    const colorForInnerTwoDiv =   `${color.substring(0, color.length - 1)}, 0.7)`;

    return (
        <div className={Style.BoxVisulization} style={{ border: `1px solid ${colorForBoxVisulization}` }}>
            <div className={Style.InnerOneDiv} style={{ border: `1px solid ${colorForInnerOneDiv}` }}>
                <div className={Style.InnerTwoDiv} style={{ border: `1px solid ${colorForInnerTwoDiv}` }}>
                    <div className={Style.MostInnerDiv} style={{ backgroundColor: color }} title={`Views-${value}%`}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxElem;
