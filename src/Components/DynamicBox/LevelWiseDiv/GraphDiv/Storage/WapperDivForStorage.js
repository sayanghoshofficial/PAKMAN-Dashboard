import React from 'react';
import Style from '../graph.module.css';

const WapperDivForStorage = ({ ele }) => {
   
    const addAlphaToColor = (color, alpha) => {
        const newColor = `rgba(${color.slice(4, -1)}, ${alpha})`;
        return newColor;
    };
    return (
        <div
            className={Style.wrapperDiv}
            style={{ width: ele.value }}
        >
            <div
                className={Style.upperHeading}
                style={{ color: ele.color }}
            >
                {ele.name}
            </div>
            <div
                className={Style.graphBox}
                style={{
                    borderLeft: `1px solid ${ele.color}`,
                    borderRight: ele.id === 4 ? `1px solid ${ele.color}` : 'none'
                }}
            >
                <div
                    className={Style.upperDiv}
                    style={{ backgroundColor: addAlphaToColor(ele.color, 0.2) }}
                >
                </div>
                <div
                    className={Style.midDiv}
                    style={{ backgroundColor: ele.color }}>
                </div>
                <div className={Style.bottomDiv}></div>
            </div>
            <div className={Style.bottomValueBox}>
                {ele.PBvalue}PB
            </div>
        </div>
    )
}

export default WapperDivForStorage;
