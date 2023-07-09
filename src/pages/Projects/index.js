import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import ProjectSettings from './ProjectSettings';
import '../../App.css'
const Projects = () => {
  return (
    <div>
        <h1>Projects Main Page</h1>

    <div className='project-context'>
    <Routes>
      <Route
        path="/*"
        element={<Navigate to="list" replace />}
      />
      <Route path="list" element={<ProjectList />} />
      <Route path=":id" element={<ProjectDetails />} />
      <Route path=":id/settings" element={<ProjectSettings />} />
    </Routes>
    </div>
    </div>
  );
};

export default Projects;
