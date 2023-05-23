import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Menu = styled.ul`
  display: flex;
  justify-content: flex-end;
  background-color: ${colors.red};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  li {
    list-style: none;
    padding: 16px 32px;
    a {
      text-decoration: none;
      color: ${colors.white};
      font-size: 24px;
    }
  }
  li:hover {
    background-color: ${colors.blue};
  }
`;
