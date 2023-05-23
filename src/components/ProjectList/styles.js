import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.div`
  background-color: ${colors.blue};
  text-align: center;
  padding-top: 64px;
  height: 516px;

  h2 {
    color: ${colors.white};
    font-weight: 400;
    font-size: 32px;
    border-bottom: 4px solid ${colors.white};
    display: inline-block;
    margin-bottom: 64px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 64px;
    row-gap: 24px;
  }
`;
