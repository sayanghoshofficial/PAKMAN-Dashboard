import React from 'react';
import Style from '../level.module.css';

const BottomExtra = ({data}) => {
    return (
        <div className={Style.bottomExtra}>
            <div className={Style.BigValueAnother}>
                <p>{data.bottomExtra.value}</p>
            </div>
            <div className={Style.unitAnother}>
                <p>{data.bottomExtra.anotherValue}</p>
            </div>
        </div>
    )
}

export default BottomExtra;