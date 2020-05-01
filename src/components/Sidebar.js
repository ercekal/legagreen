import React from 'react'
import {
  Link,
  withRouter,
  useLocation
} from "react-router-dom";
import { Dashboard,
  OpenInBrowser,
  Polymer,
  PermDataSetting,
  CardGiftcard,
  Settings,
  SettingsInputComponent,
} from '@material-ui/icons';
import './Sidebar.scss'
import Logo from '../logo.png'

const style = { fontSize: 40, color: 'gray', padding: '10px 0' }
const routes = [
  {
    icon: <Dashboard style={style} />,
    to: '/'
  },
  {
    icon: <OpenInBrowser style={style} />,
    to: '/open'
  },
  {
    icon: <Polymer style={style} />,
    to: '/polymer'
  },
  {
    icon: <PermDataSetting style={style} />,
    to: '/perm'
  },
  {
    icon: <CardGiftcard style={style} />,
    to: '/gift'
  },
  {
    icon: <Settings style={style} />,
    to: '/settings'
  },
  {
    icon: <SettingsInputComponent style={style} />,
    to: '/filters'
  },
]

const IconRoute = ({icon, to}) => {
  const location = useLocation()
  const active = location.pathname === to
  return (
    <div className={`sidebar-route${active ? '-active' : ''}`}>
      <div className={`sidebar-route-bar${active ? '-active' : ''}`} />
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
      <div className='sidebar-account'></div>
    </div>
  )
}

export default withRouter(Sidebar)
