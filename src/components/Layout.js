import React from 'react';
import Sidebar from './Sidebar';
import '../App.css'
const Layout = ({ children }) => {
  return (
    <div className='main-container'>
        <div className='sidebar'>
        <Sidebar />
        </div>
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
