import React from 'react'
import {
  Link,
  withRouter,
  useLocation
} from "react-router-dom";
import { connect } from 'react-redux'
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
import { toggle } from '../store/actions'

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
    <div className={`Sidebar-route${active ? '-active' : ''}`} key={to}>
      <div className={`Sidebar-route-bar${active ? '-active' : ''}`} />
      <Link to={to}>{icon}</Link>
    </div>
  )
}

const Sidebar = ({onToggle}) => {
  return (
    <div className='Sidebar'>
      <div className='Sidebar-top'>
        <img src={Logo} alt='logo' />
        <div className='Sidebar-icons'>
          {routes.map(r => IconRoute(r))}
        </div>
      </div>
      <div className='Sidebar-bottom'>
        {/* opens the account sidebar  when clicked */}
        <div className='Sidebar-account' onClick={onToggle}/>
      </div>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    onToggle: () => dispatch(toggle())
  }
}

export default connect(null, mapDispatchToProps)(withRouter(Sidebar))
