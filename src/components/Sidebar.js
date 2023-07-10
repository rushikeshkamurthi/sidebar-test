import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { motion } from 'framer-motion'
import { RouteContext } from '../context/RouteContext';
import '../App.css'
import SidebarMenu from './SidebarMenu';
const Sidebar = () => {
  const { routes } = useContext(RouteContext);
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () =>{
      setIsOpen(!isOpen);
  }

  return (
    <motion.div animate={{ width: isOpen ? "250px" : "45px" }} className='sidebar'>
        <div className='top-section'>
            {isOpen && <h1>IDIGI </h1>}
            <div onClick={toggle}>|||</div>
        </div>
        <div className='routes'>
        {routes.map((route, index) =>{
               if(route.subRoutes){
                return (<SidebarMenu key={index} route={route}/>);
            } 
            return( (route.name && !route.hideInMenu) ?
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
