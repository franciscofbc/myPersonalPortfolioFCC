import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Content = styled.div`
  background-color: ${colors.darkBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  h2 {
    font-size: 64px;
    font-weight: 400;
    color: ${colors.white};
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 64px;
    row-gap: 24px;
    font-size: 24px;

    li {
      a {
        color: ${colors.white};
        text-decoration: none;
        display: flex;
        align-items: center;
        column-gap: 4px;

        transition: transform 0.3s ease-out;
      }
      a:hover {
        transform: translateY(8px);
      }
    }
  }

  height: 516px;
  border-bottom: 4px solid ${colors.red};
`;
