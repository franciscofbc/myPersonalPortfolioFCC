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
      <h2>Let&apos;s work together...</h2>
      <ul>
        <li>
          <a
            href="https://www.facebook.com/francisco.berti.9/?locale=pt_BR"
            target="_blank"
          >
            <FaFacebook /> Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/franciscofbcr/" target="_blank">
            <FaInstagram /> Instagram
          </a>
        </li>
        <li>
          <a
            href="https://br.linkedin.com/in/francisco-berti-da-cruz-b846975a"
            target="_blank"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/franciscofbc" target="_blank">
            <FaGithub /> Github
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            <FaEnvelope /> Email
          </a>
        </li>
      </ul>
    </Content>
  );
};

export default Contact;
