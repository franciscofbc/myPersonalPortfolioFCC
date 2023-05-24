import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.div`
  background-color: ${colors.blue};
  text-align: center;
  padding: 64px 0;

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

    @media (max-width: 1024px) {
      width: 80%;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      width: 80%;
    }
  }
`;
