import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Page from './components/Page'
import './App.css'

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
function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <div className='App-right'>
          <Header />
          {routes.map((route, index) => (
            // Render more <Route>s with the same paths as
            // above, but different components this time.
            <Route
              key={index}
              path={route.to}
              exact={route.exact}
              component={Page}
            />
          ))}
        </div>
      </div>
    </Router>
  );
}

export default App;
