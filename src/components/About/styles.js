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

  .about-title {
    font-weight: 400;
    font-size: 64px;
    color: ${colors.white};
  }

  .about-description {
    font-weight: 400;
    font-size: 32px;
    color: ${colors.red};
    font-style: italic;
  }
`;
