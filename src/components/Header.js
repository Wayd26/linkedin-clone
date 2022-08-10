import React from 'react'
import '../styles/Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import linkedIn from '../assets/logos/linkedin.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header() {
  return (
    <div className='header'>
        <div className="header__left">

          <img src={LinkedInIcon} alt=""/>
            <img src={linkedIn} alt=""/>
                <div class="header__search">
                    {/* Search Icon */}
                    <SearchIcon />
                    <input type="text" name="" id=""/>
                </div>
        </div>
        <div class="header__right">
          <HeaderOption Icon={HomeIcon} title="Home" />
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={"wayd_pro"} title="Me" />
        </div>
    </div>
  )
  
}

export default Header