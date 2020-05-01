import React from 'react';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Sidebar from './components/Sidebar'
import Header from './components/Header'


function App() {
  return (
    <Router>
        <Sidebar />
        <div>
          <Header />
        </div>
    </Router>
  );
}

export default App;
