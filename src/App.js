import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaHome, FaProjectDiagram } from 'react-icons/fa';
import Layout from './components/Layout';
import { RouteContext } from './context/RouteContext';
import Login from './pages/User/Login';
import Dashboard from './pages/Dashboard';
import Analysis from './pages/Dashboard/Analysis';
import Monitor from './pages/Dashboard/Monitor';
import Workplace from './pages/Dashboard/Workplace';
import Projects from './pages/Projects';
import ProjectList from './pages/Projects/ProjectList';
import ProjectDetails from './pages/Projects/ProjectDetails';
import ProjectSettings from './pages/Projects/ProjectSettings';
import NotFound from './pages/NotFound';
import {BiSolidDashboard, BiSolidLogInCircle} from 'react-icons/bi'
import './App.css'
const RouteConfig = [
  {
    name: 'Login',
    locale: 'user.login',
    path: '/login',
    component: Login,
    hideInMenu: true,
    icon: <BiSolidLogInCircle />,
  },
  {
    path: '/dashboard',
    locale: 'dashboard',
    name: 'Dashboard',
    icon: <BiSolidDashboard />,
    exact: true,
    component: Dashboard,
    subRoutes: [
      {
        path: '/dashboard/analysis',
        locale: 'dashboard.analysis',
        name: 'Analysis',
        component: Analysis,
        exact: true,
        accessTO: ['admin'],
      },
      {
        path: '/dashboard/monitor',
        locale: 'dashboard.monitor',
        component: Monitor,
        name: 'Monitor',
        exact: true,
      },
      {
        path: '/dashboard/workplace',
        locale: 'dashboard.workplace',
        component: Workplace,
        name: 'Workplace',
        exact: true,
      },
    ],
  },
  {
    path: '/projects',
    locale: 'projects',
    name: 'Projects',
    icon: <FaProjectDiagram />,
    redirect: '/projects/list',
    subRoutes: [
      {
        path: '/projects/list',
        locale: 'projects.list',
        name: 'Projects',
        
        exact: true,
        component: ProjectList,
      },
      {
        path: '/projects/:id',
        locale: 'projects.details',
        name: 'Project Details',
        hideInMenu: true,
        
        key: 'projects',
        exact: true,
        component: ProjectDetails,
      },
      {
        path: '/projects/:id/settings',
        locale: 'projects.settings',
        
        name: 'Settings',
        parentKey: 'details',
        exact: true,
        component: ProjectSettings,
      },
    ],
  },
  {
    path: '*',
    component: NotFound,
  },
];

const App = () => {
  return (
    <Router>
      <RouteContext.Provider value={{ routes: RouteConfig }}>
        <Layout>
          <div className="main-content">
            <div className='bread-crumb'><h1>Bread Crumbs</h1></div>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/projects/*" element={<Projects />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </Layout>
      </RouteContext.Provider>
    </Router>
  );
};

export default App;


