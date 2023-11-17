import React, { useState } from 'react';
import Style from './Dropdown.module.css';
import plusIcon from '../../../../Assets/IconImage/add.png';
import minusIcon from '../../../../Assets/IconImage/minus.png';

const AllApplication = ({ getApp, DropDownData }) => {
    const [isAppBoxActive, setIsAppBoxActive] = useState(false);
    const toggleAppBox = () => setIsAppBoxActive(!isAppBoxActive);
    return (
        <div className={Style.AllApplicationWapper}>
            <div className={Style.heading}>
                {isAppBoxActive ?
                    <img src={minusIcon} alt='menus' onClick={toggleAppBox} />
                    :
                    <img src={plusIcon} alt='plus' onClick={toggleAppBox} />
                }

                <h1>All applications</h1>
            </div>
            {isAppBoxActive &&
                <div className={Style.AppBox}>
                    {DropDownData.map((data, ind) => (
                        <div className={Style.singleApp} key={ind}>
                            <h2 onClick={() => getApp(data.name)}>{data.name}</h2>
                        </div>


                    ))}
                </div>
            }
        </div>
    )
}

export default AllApplication
