import ProjectItem from '../ProjectItem';
import { Content } from './styles';

const ProjectList = () => {
  return (
    <Content id="projects">
      <h2>These are some of my projects</h2>
      <ul className="container">
        <li>
          <ProjectItem />
        </li>
        <li>
          <ProjectItem />
        </li>
        <li>
          <ProjectItem />
        </li>
      </ul>
    </Content>
  );
};

export default ProjectList;
