import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();

  return <h2>Project Details Page - ID: {id}</h2>;
};

export default ProjectDetails;
