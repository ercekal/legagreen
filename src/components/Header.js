import React, { useState } from 'react';
import {
  withRouter,
  useLocation
} from "react-router-dom";
import Search from './Search'
import './Header.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';

const Header = () => {
  const [clicked, setClicked] = useState(false)
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