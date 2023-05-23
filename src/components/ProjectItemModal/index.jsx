import { FaGithub } from 'react-icons/fa';
import project1 from '../../assets/images/project1.png';
import { ModalContent, Modal } from './styles';

const ProjectItemModal = () => {
  return (
    <Modal>
      <ModalContent>
        <h3>Product Landing Page</h3>
        <img src={project1} alt="" />
        <h3>Skills: HTML and CSS</h3>
        <FaGithub />
      </ModalContent>
    </Modal>
  );
};

export default ProjectItemModal;
