import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.footer`
  background-color: ${colors.darkBlue};
  height: 64px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${colors.white};

  a {
    color: ${colors.white};
    text-decoration: none;
  }
`;
