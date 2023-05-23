import { styled } from 'styled-components';
import { colors } from '../../styles';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  background-color: ${colors.darkBlue};
  cursor: pointer;

  img {
    height: 160px;
    width: 100%;
    margin-bottom: 16px;
  }

  h3 {
    color: ${colors.white};
    font-weight: 400;
  }

  h3:hover {
    font-weight: 500;
  }
`;
