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
    padding: 16px 0;

    a {
      padding: 16px 32px;
      text-decoration: none;
      color: ${colors.white};
    }

    &:hover {
      background-color: ${colors.blue};
    }
  }
`;
