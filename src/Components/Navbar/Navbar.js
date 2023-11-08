import React from 'react';
import Style from './Navbar.module.css';
import MenuIcon from '../../Assets/IconImage/menu.svg'
import PackmanLogo from '../../Assets/IconImage/logo_pacman.svg';
import notificationBell from '../../Assets/IconImage/alarm-bell.png';
import user from '../../Assets/IconImage/profile-user.png';

const Navbar = () => {
    return (
        <div className={Style.NavbarWrapper} >
            <div className={Style.menu}>
                <img src={MenuIcon} alt='Menu_Icon'/>
            </div>
            <div className={Style.logo}>
                <img src={PackmanLogo} alt='Packman_Logo' />
            </div>
            <div className={Style.userAndNotification}>
                <img src={notificationBell} alt='notification_bell' />
                <img src={user} alt='user' />
            </div>

        </div>
    )
}

export default Navbar
