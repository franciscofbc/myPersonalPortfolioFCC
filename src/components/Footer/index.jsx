import { FaFreeCodeCamp } from 'react-icons/fa';

import { Content } from './styles';

const Footer = () => {
  return (
    <Content>
      <p>This is my personal portfolio</p>
      <p>
        Inspiration:{' '}
        <a
          href="https://personal-portfolio.freecodecamp.rocks/"
          target="_blank"
        >
          freeCodeCamp <FaFreeCodeCamp />
        </a>
      </p>
    </Content>
  );
};

export default Footer;
