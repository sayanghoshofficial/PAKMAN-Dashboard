import React from 'react';
import Style from './Navbar.module.css';
import { MenuIcon } from '../../Assets/IconPack';
import PackmanLogo from '../../Assets/IconImage/logo_pacman.svg';
import notificationBell from '../../Assets/IconImage/alarm-bell.png';
import user from '../../Assets/IconImage/profile-user.png';

const Navbar = () => {
    return (
        <div className={Style.NavbarWrapper} >
            <div className={Style.menu} id='menu'>
                <MenuIcon fillColor={'white'} />
            </div>
            <div className={Style.logo} id='logo'>
                <img src={PackmanLogo} alt='Packman_Logo' />
            </div>
            <div className={Style.userAndNotification} id='user'>
                <img src={notificationBell} alt='notification_bell' />
                <img src={user} alt='user' />
            </div>

        </div>
    )
}

export default Navbar
