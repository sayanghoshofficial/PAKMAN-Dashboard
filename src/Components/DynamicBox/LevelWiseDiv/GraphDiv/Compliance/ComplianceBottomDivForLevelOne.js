import React from 'react';
import Style from './Compliance.module.css';
import ComplianceInner from './ComplianceInner';

const ComplianceBottomDivForLevelOne = ({ data }) => {
    const dataValue = data.complianceL1Bottom;
    

    return (
        <div className={Style.ComplianceBottomDivForLevelOneWapper}>
            {
                dataValue.map((elem, index) => (

                    <ComplianceInner elem={elem} key={index} />
                ))
            }
        </div>
    )
}

export default ComplianceBottomDivForLevelOne;
