import React from 'react';
import Style from '../level.module.css';

const BottomExtraForTwo = ({data}) => {
    return (
        <div className={Style.bottomExtraForLevelTwo}>
            <div className={Style.BigValueAnother}>
                <p>{data.bottomExtra.value}</p>
            </div>
            <div className={Style.unitAnother}>
                <p>{data.bottomExtra.anotherValue}</p>
            </div>
        </div>
    )
}

export default BottomExtraForTwo;
