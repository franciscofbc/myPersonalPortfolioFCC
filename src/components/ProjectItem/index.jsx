import { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import close from '../../assets/images/close.png';
import { Card, Modal, ModalContent } from './styles';

const ProjectItem = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {project && (
        <Card onClick={() => setIsVisible(!isVisible)}>
          <img src={project.cover} alt="" />
          <h3>
            <span className="code">&lt; </span>
            {project.title}
            <span className="code"> /&gt;</span>
          </h3>
        </Card>
      )}
      {isVisible && (
        <Modal>
          <ModalContent>
            <h3>{project.title}</h3>
            <a href={project.linkVercel} target="_blank">
              <img className="imgProject" src={project.cover} alt="" />
            </a>
            <h3>Skills: {project.skills}</h3>
            <a href={project.linkGithub} target="_blank">
              <FaGithub />
            </a>
            <img
              className="imgClose"
              src={close}
              alt=""
              onClick={() => setIsVisible(false)}
            />
          </ModalContent>
          <div className="overlay" onClick={() => setIsVisible(false)}></div>
        </Modal>
      )}
    </>
  );
};

export default ProjectItem;
