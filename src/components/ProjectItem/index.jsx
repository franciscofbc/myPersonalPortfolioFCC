import { useState } from 'react';
import project1 from '../../assets/images/project1.png';
import { Card } from './styles';
import ProjectItemModal from '../ProjectItemModal';

const ProjectItem = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Card onClick={() => setIsVisible(!isVisible)}>
        <img src={project1} alt="" />
        <h3>Product Landing Page</h3>
      </Card>
      {isVisible && <ProjectItemModal />}
    </>
  );
};

export default ProjectItem;
