import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import { RouteContext } from '../context/RouteContext';
import '../App.css'
import SidebarMenu from './SidebarMenu';
const Sidebar = () => {
  const { routes } = useContext(RouteContext);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () =>{
      setIsOpen(!isOpen);
  }
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <motion.div animate={{ width: isOpen ? "250px" : "45px" }} className='sidebar'>
        <div className='top-section'>
            {isOpen && <h1>IDIGIols</h1>}
            <div onClick={toggle}>|||</div>
        </div>
        <div className='routes'>
        {routes.map((route, index) =>{
               if(route.subRoutes){
                return (<SidebarMenu route={route}/>);
            } 
            return(route.name ?
                <NavLink key={index} to={route.path} activeClassName='active' className='link' >
                    <div className='icon'>{route.icon}</div>
                    <div className='link-text'>{route.name}</div>
                </NavLink>:null
            ) 
        } )}
        </div>
    </motion.div>
  );
};

export default Sidebar;
