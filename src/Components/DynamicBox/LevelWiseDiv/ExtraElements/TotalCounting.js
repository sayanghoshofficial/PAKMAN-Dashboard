import React from 'react';
import Style from '../level.module.css';
import BigValue from '../BigValue';

const TotalCounting = ({data}) => {
    return (
        <div
            className={Style.totalCounting}
        >
            <BigValue elem={data.bottomContaint} />
            <div className={Style.unit}>
                <p>{data.bottomContaint?.rightTop}</p>
                <p>{data.bottomContaint?.rightDown}</p>
            </div>
        </div>
    )
}

export default TotalCounting;
