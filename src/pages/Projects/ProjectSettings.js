import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectSettings = () => {
  const { id } = useParams();

  return <h2>Project Settings Page - ID: {id}</h2>;
};

export default ProjectSettings;
