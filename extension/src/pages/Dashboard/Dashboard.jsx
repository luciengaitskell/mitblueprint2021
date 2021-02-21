import React from 'react';
import logo from '../../assets/img/logo.svg';
import './Dashboard.css';
import './Dashboard.scss';

import DashHeader from './DashHeader';
import DashData from './DashData';

const Dashboard = () => {
  return (
    <div className="App">
      <DashHeader />
      <div className="App-container">
        <DashData />
      </div>
    </div>
  );
};

export default Dashboard;
