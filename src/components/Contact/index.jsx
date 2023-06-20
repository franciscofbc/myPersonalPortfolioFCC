import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from 'react-icons/fa';

import { Content } from './styles';

const Contact = () => {
  return (
    <Content id="contact">
      <h2 className="contact-title">Let&apos;s work together...</h2>
      <ul className="contact-list">
        <li className="contact-list-item">
          <a
            className="item-content"
            href="https://www.instagram.com/franciscofbcr/"
            target="_blank"
          >
            <FaInstagram /> Instagram
          </a>
        </li>
        <li className="contact-list-item">
          <a
            className="item-content"
            href="https://br.linkedin.com/in/francisco-berti-da-cruz-b846975a"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li className="contact-list-item">
          <a
            className="item-content"
            href="https://github.com/franciscofbc"
            target="_blank"
          >
            <FaGithub /> Github
          </a>
        </li>
        <li className="contact-list-item">
          <a
            className="item-content"
            href="mailto:fbc9911@gmail.com"
            target="_blank"
          >
            <FaEnvelope /> Email
          </a>
        </li>
      </ul>
    </Content>
  );
};

export default Contact;
