import React from 'react';
import { Route, Navigate, Routes, NavLink } from 'react-router-dom';
import ProjectList from './ProjectList';
import ProjectDetails from './ProjectDetails';
import ProjectSettings from './ProjectSettings';

const Projects = () => {
  return (
    <div>
        <h1>Projects page</h1>

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
  );
};

export default Projects;
