import project1 from '../../assets/images/project1.png';
import { Card } from './styles';

const ProjectItem = () => {
  return (
    <Card>
      {/* <div> */}
      <img src={project1} alt="" />
      <h3>Product Landing Page</h3>
      {/* </div> */}
    </Card>
  );
};

export default ProjectItem;
