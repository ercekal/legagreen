import React from 'react';
import { connect } from 'react-redux'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Page from './components/Page'
import Account from './components/Account'
import './App.scss'

const routes = [
  {
    to: '/',
    exact: true,
    component: Page
  },
  {
    to: '/open',
    component: Page
  },
  {
    to: '/polymer',
    component: Page
  },
  {
    to: '/perm',
    component: Page
  },
  {
    to: '/gift',
    component: Page
  },
  {
    to: '/settings',
    component: Page
  },
  {
    to: '/filters',
    component: Page
  }
]
function App({openToggle}) {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <div className={`App-middle${openToggle ? '-open' : ''}`}>
          <Header />
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.to}
              exact={route.exact}
              component={Page}
            />
          ))}
        </div>
        <div className={`App-right${openToggle ? '-open' : ''}`}>
          <Account />
        </div>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    openToggle: state.openToggle,
  }
}
export default connect(mapStateToProps)(App);
