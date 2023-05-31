import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.div`
  height: 100vh;
  background: linear-gradient(62deg, #3a3d40 0%, #181719 100%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-weight: 400;
    font-size: 64px;
    color: ${colors.white};
  }

  h2 {
    font-weight: 400;
    font-size: 32px;
    color: ${colors.red};
    font-style: italic;
  }

  h3 {
    font-weight: 400;
    font-size: 24px;
    color: ${colors.red};
    font-style: italic;
  }

  .container {
    margin-top: 32px;
  }
`;
