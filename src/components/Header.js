import React, { useState } from 'react';
import {withRouter, useLocation} from "react-router-dom";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Search from './Search'
import './Header.scss'

const Header = () => {
  // uses Hooks to toggle the notification icon
  const [clicked, setClicked] = useState(false)
  // gets the page title in header from router path
  const location = useLocation()
  return (
    <div className='Header'>
      {location.pathname === '/' ? 'Dashboard' : location.pathname.substring(1).replace(/^\w/, c => c.toUpperCase())}
      <div className='Header-right'>
        <Search />
        <div className='Header-notificationIcon' onClick={() => setClicked(!clicked)}><NotificationsIcon style={{ color: clicked ? 'black' : 'gray' }}/></div>
      </div>
    </div>
  );
};

export default withRouter(Header);