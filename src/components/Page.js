import React from 'react';
import {
  withRouter,
  useLocation
} from "react-router-dom";
import './Page.scss'

const Page = () => {
  const location = useLocation()
  return (
    <div className='Page'>
      {location.pathname === '/' ? 'Dashboard' : location.pathname}
    </div>
  );
};
export default withRouter(Page)
