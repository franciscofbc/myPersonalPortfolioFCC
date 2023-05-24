import { useEffect, useState } from 'react';
import ProjectItem from '../ProjectItem';
import { Content } from './styles';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('https://servidor-estaticos-rose.vercel.app/myPortfolio.json')
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <Content id="projects">
      <h2>These are some of my projects</h2>
      {projects && (
        <ul className="container">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectItem project={project} />
            </li>
          ))}
        </ul>
      )}
    </Content>
  );
};

export default ProjectList;
