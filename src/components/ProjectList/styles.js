import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.div`
  background-color: ${colors.blue};
  padding-top: 64px;
  text-align: center;

  height: 516px;

  h2 {
    color: ${colors.white};
    font-weight: 400;
    font-size: 32px;
    border-bottom: 4px solid ${colors.white};
    display: inline-block;
  }
`;
