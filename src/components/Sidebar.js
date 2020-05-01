import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory, withRouter, useLocation
} from "react-router-dom";
import { Dashboard,
  OpenInBrowser,
  Polymer,
  PermDataSetting,
  CardGiftcard,
  Settings,
  SettingsInputComponent,
  RouterSharp
} from '@material-ui/icons';
import './Sidebar.scss'
import Logo from '../logo.png'

const routes = [
  {
    icon: <Dashboard style={{ fontSize: 40 }} />,
    to: '/'
  },
  {
    icon: <OpenInBrowser style={{ fontSize: 40 }} />,
    to: '/open'
  },
  {
    icon: <Polymer style={{ fontSize: 40 }} />,
    to: '/polymer'
  },
  {
    icon: <PermDataSetting style={{ fontSize: 40 }} />,
    to: '/perm'
  },
  {
    icon: <CardGiftcard style={{ fontSize: 40 }} />,
    to: '/gift'
  },
  {
    icon: <Settings style={{ fontSize: 40 }} />,
    to: '/settings'
  },
  {
    icon: <SettingsInputComponent style={{ fontSize: 40 }} />,
    to: '/filters'
  },
]

const IconRoute = ({icon, to}) => {
  return (
    <div>
      <Link to={to}>{icon}</Link>
    </div>
  )
}

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <img src={Logo} alt='logo' />
      <div className='sidebar-icons'>
        {routes.map(r => IconRoute(r))}
      </div>
    </div>
  )
}

export default Sidebar
