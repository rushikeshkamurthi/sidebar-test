import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Analysis from './Analysis';
import Monitor from './Monitor';
import Workplace from './Workplace';
import '../../App.css'
const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className='dashboard-content'>
      {/* <Routes>
      <Route  path='analysis' element={<Analysis/>} ></Route>
      <Route  path='monitor' element={<Monitor/>} ></Route>
      <Route  path='workplace' element={<Workplace/>} ></Route>
      </Routes> */}
      <Outlet/>
      </div>
    </div>
  );
};

export default Dashboard;
